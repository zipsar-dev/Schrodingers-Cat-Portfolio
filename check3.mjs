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
await new Promise((r) => setTimeout(r, 1200));
// scroll through the whole page gradually
await page.evaluate(async () => {
  const step = 300;
  for (let y = 0; y <= document.body.scrollHeight; y += step) {
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 120));
  }
  window.scrollTo(0, document.body.scrollHeight);
  await new Promise((r) => setTimeout(r, 900));
  window.scrollTo(0, 0);
});
const stuck = await page.evaluate(() =>
  [...document.querySelectorAll("main *")].filter((el) => {
    const s = getComputedStyle(el);
    return parseFloat(s.opacity) < 0.1 && el.getBoundingClientRect().width > 0;
  }).length
);
console.log("elements still hidden after scrolling through page:", stuck);
await browser.close();
process.exit(stuck === 0 ? 0 : 1);
