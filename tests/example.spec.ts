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

test.describe("Login entry", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/Signin");
  });
  test("open login page", async ({ page }) => {
    await expect(page).toHaveURL(/.*\/Signin/);
  });

  test("login form", async ({ page }) => {
    await page.getByLabel("Username").fill("hussein");
    await page.getByLabel("Password").fill("123456");
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page).toHaveURL(/.*\/dashboard/);
    await page.screenshot({ path: "screenshot/login.png", fullPage: true });
  });

  test("destructive", async ({ page }) => {
    await page.getByLabel("Username").fill("wrtong");
    await page.getByLabel("Password").fill("passs");
    await page.getByRole("button", { name: "Login" }).click();
    await expect(
      page.getByText("نام کاربری یا رمز عبور اشتباه است")
    ).toBeVisible();
  });
});
// ?? register test
test.describe("register case", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/Register");
  });
  test("open register Page", async ({ page }) => {
    await expect(page).toHaveURL(/.*\/Register/);
  });
  test("register form", async ({ page }) => {
    await page.getByPlaceholder("email").fill("hussein@gmail.com");
    await page.getByPlaceholder("username").fill("husseinpenart");
    await page.getByPlaceholder("password").fill("123456");
    await expect(page).toHaveURL(/.*\/Register/);
    await page.screenshot({ path: "screenshot/register.png", fullPage: true });
  });
  test("Error", async ({ page }) => {
    await page.getByPlaceholder("email").fill("hussein@gmail.com");
    await page.getByPlaceholder("username").fill("husseinpenart");
    await page.getByPlaceholder("password").fill("123456");
    await expect(page.locator(".error")).toBeVisible();
    await page.screenshot({ path: "screenshot/error.png", fullPage: true });
  });
  test("Error message is visible", async ({ page }) => {
    await expect(page.getByText("Email already exists")).toBeVisible();
    // or:
    // await expect(page.locator(".error")).toBeVisible();
  });
});
