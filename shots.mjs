import puppeteer from "puppeteer-core";
const BASE = "http://127.0.0.1:4173";
const browser = await puppeteer.launch({
  executablePath: "/usr/bin/google-chrome",
  headless: "new",
  args: ["--no-sandbox", "--disable-gpu", "--no-proxy-server"],
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
for (const [route, name] of [["/", "home"], ["/about", "about"], ["/contact", "contact"]]) {
  await page.goto(`${BASE}${route}`, { waitUntil: "networkidle0" });
  await new Promise((r) => setTimeout(r, 1500));
  await page.screenshot({ path: `/tmp/shot-${name}.png` });
  console.log(`captured ${name}`);
}
await browser.close();
process.exit(0);
