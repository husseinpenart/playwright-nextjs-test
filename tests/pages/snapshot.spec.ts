import { test, expect } from "@playwright/test";

test("DOM snapshot", async ({ page }) => {
  await page.goto("http://localhost:3000");
  const main = page.locator("main"); // یا هر بخش مهمی از صفحه

  expect(await main.innerHTML()).toMatchSnapshot("main.html");
});
test("visual regression", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await expect(page).toHaveScreenshot("tests/artifacts/screenshots/homepage.png");
});
