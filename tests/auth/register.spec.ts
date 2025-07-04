import test, { expect } from "@playwright/test";
import { invalidUser, validUser } from "../helpers/fixtures";
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
    await page.screenshot({
      path: `tests/artifacts/screenshots/${test.info().title}.png`,
    });
  });
  test("register form", async ({ page }) => {
    await page.getByPlaceholder("email").fill(validUser.email);
    await page.getByPlaceholder("username").fill(validUser.username);
    await page.getByPlaceholder("password").fill(validUser.password);
    await expect(page).toHaveURL(/.*\/Register/);
  });
  test("Error", async ({ page }) => {
    await page.getByPlaceholder("email").fill(invalidUser.email);
    await page.getByPlaceholder("username").fill(invalidUser.username);
    await page.getByPlaceholder("password").fill(invalidUser.password);
    await expect(page.locator(".error")).toBeVisible();
  });
  test("Error message is visible", async ({ page }) => {
    await expect(page.getByText("Email already exists")).toBeVisible();
    // or:
    // await expect(page.locator(".error")).toBeVisible();
  });
});
