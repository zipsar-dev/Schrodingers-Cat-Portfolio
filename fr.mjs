import puppeteer from "puppeteer-core";
const browser = await puppeteer.launch({
  executablePath: "/usr/bin/google-chrome",
  headless: "new",
  args: ["--no-sandbox", "--disable-gpu", "--no-proxy-server"],
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto("http://127.0.0.1:4173/", { waitUntil: "networkidle0" });
await new Promise((r) => setTimeout(r, 1500));
const info = await page.evaluate(() => {
  const el = document.querySelector(".bracket-frame");
  const r = el.getBoundingClientRect();
  const before = getComputedStyle(el, "::before");
  const after = getComputedStyle(el, "::after");
  return {
    rect: { x: r.x, y: r.y, w: r.width, h: r.height, bottom: r.bottom },
    borderTop: getComputedStyle(el).borderTopWidth,
    borderLeft: getComputedStyle(el).borderLeftWidth,
    before: { top: before.top, height: before.height, width: before.width, right: before.right },
    after: { bottom: after.bottom, height: after.height, width: after.width, left: after.left },
    contentH: [...el.children].reduce((a, c) => a + c.getBoundingClientRect().height, 0),
  };
});
console.log(JSON.stringify(info, null, 2));
await browser.close();
process.exit(0);
