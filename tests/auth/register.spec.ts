import test, { expect } from "@playwright/test";
// !! Mocking apis
test.describe("Mocking api", async () => {
  test("mocking apis", async ({ page }) => {
    await page.route("**/api/register", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ message: "Registred Done Successfully" }),
      });
    });
  });
  test("Errors", async ({ page }) => {
    await page.route("**/api/register", async (route) => {
      await route.fulfill({
        status: 400,
        contentType: "application/json",
        body: JSON.stringify({ message: "Email Already exists" }),
      });
    });
  });
});
// ?? register test
test.describe("register case", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/Register");
  });
  test("open register Page", async ({ page }) => {
    await expect(page).toHaveURL(/.*\/Register/);
    await page.screenshot({ path: `screenshots/${test.info().title}.png` });
  });
  test("register form", async ({ page }) => {
    await page.getByPlaceholder("email").fill("hussein@gmail.com");
    await page.getByPlaceholder("username").fill("husseinpenart");
    await page.getByPlaceholder("password").fill("123456");
    await expect(page).toHaveURL(/.*\/Register/);
  });
  test("Error", async ({ page }) => {
    await page.getByPlaceholder("email").fill("hussein@gmail.com");
    await page.getByPlaceholder("username").fill("husseinpenart");
    await page.getByPlaceholder("password").fill("123456");
    await expect(page.locator(".error")).toBeVisible();
  });
  test("Error message is visible", async ({ page }) => {
    await expect(page.getByText("Email already exists")).toBeVisible();
    // or:
    // await expect(page.locator(".error")).toBeVisible();
  });
});
