import puppeteer from "puppeteer-core";

const BASE = "http://127.0.0.1:4173";
const routes = ["/", "/about", "/research", "/programme", "/events", "/club", "/career", "/contact", "/nope"];
const browser = await puppeteer.launch({
  executablePath: "/usr/bin/google-chrome",
  headless: "new",
  args: ["--no-sandbox", "--disable-gpu", "--no-proxy-server"],
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });

let problems = 0;
for (const route of routes) {
  const errors = [];
  page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });
  page.on("requestfailed", (r) => errors.push(`FAILED: ${r.url()}`));
  await page.goto(`${BASE}${route}`, { waitUntil: "networkidle0" });
  await new Promise((r) => setTimeout(r, 1200)); // let GSAP settle
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1);
  const logoLoaded = await page.evaluate(() => {
    const imgs = [...document.images].filter((i) => i.src.includes("logo"));
    return imgs.length ? imgs.every((i) => i.complete && i.naturalWidth > 0) : true;
  });
  const status = (overflow ? "OVERFLOW " : "ok ") + (logoLoaded ? "logo-ok" : "logo-MISSING");
  if (overflow || !logoLoaded || errors.length) problems++;
  console.log(`${route.padEnd(12)} ${status}${errors.length ? " | errors: " + errors.slice(0, 3).join(" ;; ") : ""}`);
  page.removeAllListeners("console");
  page.removeAllListeners("requestfailed");
}
await browser.close();
console.log(problems === 0 ? "\nNo rendering problems found." : `\n${problems} route(s) had problems.`);
process.exit(0);
