import puppeteer from "puppeteer-core";
const browser = await puppeteer.launch({
  executablePath: "/usr/bin/google-chrome",
  headless: "new",
  args: ["--no-sandbox", "--disable-gpu", "--no-proxy-server"],
});
const page = await browser.newPage();
page.on("response", (r) => { if (r.status() >= 400) console.log("STATUS", r.status(), r.url()); });
page.on("requestfailed", (r) => console.log("FAILED", r.url()));
await page.goto("http://127.0.0.1:4173/", { waitUntil: "networkidle0" });
await new Promise((r) => setTimeout(r, 800));
await browser.close();
process.exit(0);
