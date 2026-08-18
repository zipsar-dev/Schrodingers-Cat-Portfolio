import puppeteer from "puppeteer-core";
const BASE = "http://127.0.0.1:4173";
const browser = await puppeteer.launch({
  executablePath: "/usr/bin/google-chrome",
  headless: "new",
  args: ["--no-sandbox", "--disable-gpu", "--no-proxy-server"],
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(`${BASE}/`, { waitUntil: "networkidle0" });
await new Promise((r) => setTimeout(r, 1600));

const info = await page.evaluate(() => {
  const frame = document.querySelector(".bracket-frame");
  const frameInfo = frame
    ? {
        borderTop: getComputedStyle(frame).borderTopWidth + " " + getComputedStyle(frame).borderTopColor,
        before: getComputedStyle(frame, "::before").width + " x " + getComputedStyle(frame, "::before").height,
        after: getComputedStyle(frame, "::after").width + " x " + getComputedStyle(frame, "::after").height,
        hasPseudo: !!getComputedStyle(frame, "::before").content,
      }
    : null;
  const navLogo = document.querySelector("header img");
  const logoInfo = navLogo ? { w: navLogo.naturalWidth, h: navLogo.naturalHeight, rendered: navLogo.getBoundingClientRect().width } : null;
  // after animations: any element stuck at opacity 0?
  const hidden = [...document.querySelectorAll("main *")].filter((el) => {
    const s = getComputedStyle(el);
    return parseFloat(s.opacity) < 0.1 && el.getBoundingClientRect().width > 0;
  }).length;
  const heroVisible = [...document.querySelectorAll("[data-hero]")].map((el) => getComputedStyle(el).opacity);
  return { frameInfo, logoInfo, stuckHidden: hidden, heroOpacities: heroVisible };
});
console.log(JSON.stringify(info, null, 2));
await browser.close();
process.exit(0);
