/* Smoke test for the Schrödinger's Cat Think Tank frontend.
 * Run with the preview server on 127.0.0.1:4173:
 *   node scripts/smoke-test.mjs
 */
import puppeteer from "puppeteer-core";

const BASE = "http://127.0.0.1:4173";
let failures = 0;

function check(name, ok) {
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}`);
  if (!ok) failures += 1;
}

const browser = await puppeteer.launch({
  executablePath: "/usr/bin/google-chrome",
  headless: "new",
  args: ["--no-sandbox", "--disable-gpu", "--no-proxy-server"],
});

const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });

/* ---------- Contact form validation ---------- */
await page.goto(`${BASE}/contact`, { waitUntil: "networkidle0" });
await page.click('button[type="submit"]');
await page.waitForSelector("#username-error");
const hasUsernameError = await page.$("#username-error") !== null;
const hasEmailError = await page.$("#email-error") !== null;
const hasMessageError = await page.$("#message-error") !== null;
check("contact form shows all three validation errors on empty submit", hasUsernameError && hasEmailError && hasMessageError);

await page.type("#contact-email", "not-an-email");
await page.click('button[type="submit"]');
const emailStillInvalid = await page.$("#email-error") !== null;
check("contact form rejects an invalid email", emailStillInvalid);

await page.type("#contact-username", "Ada Lovelace");
await page.type("#contact-email", "ada@example.com");
await page.type("#contact-message", "I would love to join the debate club in my city.");
await page.click('button[type="submit"]');
await page.waitForSelector("text/Thank you!", { timeout: 5000 });
check("contact form submits and shows success state", true);

/* ---------- Programme tabs ---------- */
await page.goto(`${BASE}/programme`, { waitUntil: "networkidle0" });
const allCards = await page.$$("article").then((a) => a.length);
check("programme page shows all cards by default", allCards >= 4);
await page.evaluate(() => {
  const tabs = [...document.querySelectorAll('[role="tab"]')];
  tabs.find((t) => t.textContent.trim() === "Fellowships").click();
});
await new Promise((r) => setTimeout(r, 300));
const fellowshipCards = await page.$$("article").then((a) => a.length);
const visibleText = await page.evaluate(() => document.body.innerText);
check("programme filter shows only fellowship programmes", fellowshipCards === 2 && visibleText.includes("Youth Research Fellowship") && !visibleText.includes("Summer Research Camp"));

/* ---------- Nav active state + navigation ---------- */
await page.goto(`${BASE}/about`, { waitUntil: "networkidle0" });
await page.click('a[href="/research"]');
await page.waitForFunction(() => location.pathname === "/research");
check("nav link navigates to /research", true);
await new Promise((r) => setTimeout(r, 300));
const activeLabel = await page.evaluate(() => {
  const links = [...document.querySelectorAll('nav[aria-label="Primary"] a')];
  return Boolean(links.find((l) => l.textContent.includes("Research") && l.classList.contains("text-primary")));
});
check("active nav link is highlighted", activeLabel);

/* ---------- Mobile menu ---------- */
await page.setViewport({ width: 480, height: 900 });
await page.goto(`${BASE}/`, { waitUntil: "networkidle0" });
check("desktop nav hidden on mobile", !(await page.$eval('nav[aria-label="Primary"]', (el) => el.offsetParent !== null)));
await page.click('button[aria-label="Open menu"]');
await page.waitForSelector('nav[aria-label="Mobile"]');
const mobileNavVisible = await page.$eval('nav[aria-label="Mobile"]', (el) => el.offsetParent !== null);
check("mobile drawer opens on hamburger click", mobileNavVisible);

/* ---------- 404 ---------- */
await page.setViewport({ width: 1440, height: 900 });
await page.goto(`${BASE}/does-not-exist`, { waitUntil: "networkidle0" });
const bodyText = await page.evaluate(() => document.body.innerText);
check("unknown route renders 404 page", bodyText.includes("in superposition"));

await browser.close();
console.log(failures === 0 ? "\nAll smoke tests passed." : `\n${failures} check(s) failed.`);
process.exit(failures === 0 ? 0 : 1);
