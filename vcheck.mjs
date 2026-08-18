import puppeteer from "puppeteer-core";
const BASE = "http://127.0.0.1:4173";
const routes = ["/", "/about", "/research", "/programme", "/events", "/club", "/career", "/contact"];
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
  await new Promise((r) => setTimeout(r, 1200));
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1);
  const imgIssues = await page.evaluate(() => {
    const imgs = [...document.images];
    const broken = imgs.filter((i) => !i.complete || i.naturalWidth === 0).map((i) => i.src);
    const total = imgs.length;
    const rendered = imgs.filter((i) => i.complete && i.naturalWidth > 0 && i.getBoundingClientRect().width > 0).length;
    return { total, rendered, broken };
  });
  if (overflow || errors.length || imgIssues.broken.length) problems++;
  console.log(`${route.padEnd(12)} overflow:${overflow ? "YES" : "no"} images:${imgIssues.rendered}/${imgIssues.total}${imgIssues.broken.length ? " BROKEN: " + imgIssues.broken.slice(0,2).join(",") : ""}${errors.length ? " | errors: " + errors.slice(0,2).join(" ;; ") : ""}`);
  page.removeAllListeners("console");
  page.removeAllListeners("requestfailed");
}
await browser.close();
console.log(problems === 0 ? "\nOK" : `\n${problems} problem routes`);
process.exit(0);
