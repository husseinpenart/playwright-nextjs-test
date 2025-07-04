import { test, expect } from "@playwright/test";

// test("has title", async ({ page }) => {
//   await page.goto("https://playwright.dev/");

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test("get started link", async ({ page }) => {
//   await page.goto("https://playwright.dev/");

//   // Click the get started link.
//   await page.getByRole("link", { name: "Get started" }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(
//     page.getByRole("heading", { name: "Installation" })
//   ).toBeVisible();
// });
test("get hero", async ({ page }) => {
  await page.goto("https://wocalend.site");
  await page.getByText("تقویم هوشمند دوره‌های ماهانه");
  await page.locator('a[href="pages/FrontScreen/about"]');
  // await page.getByRole('link' , {name:'تماس با ما'}).click()
  // await expect(page).toHaveURL('/.*contact/' , {timeout:200000})
  await page.screenshot({
    path: "screenshots/page.png",
    fullPage: true,
    timeout: 4000,
  });
});


