import puppeteer from "puppeteer-core";
const BASE = "http://127.0.0.1:4173";
const browser = await puppeteer.launch({
  executablePath: "/usr/bin/google-chrome",
  headless: "new",
  args: ["--no-sandbox", "--disable-gpu", "--no-proxy-server"],
});
const page = await browser.newPage();
page.on("response", (r) => { if (r.status() >= 400) console.log("404:", r.url()); });
await page.setViewport({ width: 1440, height: 900 });
for (const route of ["/", "/about", "/research", "/programme", "/events", "/club", "/career", "/contact", "/nope"]) {
  await page.goto(`${BASE}${route}`, { waitUntil: "networkidle0" });
  await new Promise((r) => setTimeout(r, 600));
}
await browser.close();
console.log("done");
process.exit(0);
