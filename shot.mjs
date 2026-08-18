import puppeteer from "puppeteer-core";
const browser = await puppeteer.launch({
  executablePath: "/usr/bin/google-chrome",
  headless: "new",
  args: ["--no-sandbox", "--disable-gpu", "--no-proxy-server"],
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto("http://127.0.0.1:4173/", { waitUntil: "networkidle0" });
await new Promise((r) => setTimeout(r, 1800));
await page.screenshot({ path: "/tmp/clean-home.png" });
// sample info
const info = await page.evaluate(() => {
  const frame = document.querySelector(".bracket-frame");
  const heroImg = document.querySelector(".bracket-frame")?.parentElement?.parentElement?.querySelector("img[src*='hero']");
  const heading = document.querySelector("h1");
  return {
    headingText: heading?.textContent,
    headingVisible: heading ? getComputedStyle(heading).opacity : null,
    heroImgRect: heroImg ? { w: heroImg.getBoundingClientRect().width, h: heroImg.getBoundingClientRect().height, y: heroImg.getBoundingClientRect().top } : null,
    eyebrow: document.querySelector(".bracket-frame .eyebrow")?.textContent,
    scrollY: window.scrollY,
  };
});
console.log(JSON.stringify(info, null, 2));
await browser.close();
process.exit(0);
