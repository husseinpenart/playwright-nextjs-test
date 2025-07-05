import test, { expect } from "@playwright/test";
import { UserLogin } from "../helpers/login";
// !! @smoke or @login or anything is Tag (Annotation) and filtering for testing

test.describe("@auth Login entry", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/Signin");
  });
  test("open login page", async ({ page }) => {
    await expect(page).toHaveURL(/.*\/Signin/);
    await page.screenshot({
      path: `tests/artifacts/screenshots/${test.info().title}.png`,
    });
  });

  test("@Login login form", async ({ page }) => {
    await UserLogin(page);
    // ??? save cookies or localstorage or sessions
    await page.context().storageState({ path: "storage/logged-in.json" });
  });

  // @smoke or @login or anything is Tag (Annotation) and filtering for testing
  test("@smoke destructive", async ({ page }) => {
    await page.getByLabel("Username").fill("wrtong");
    await page.getByLabel("Password").fill("passs");
    await page.getByRole("button", { name: "Login" }).click();
    await expect(
      page.getByText("نام کاربری یا رمز عبور اشتباه است")
    ).toBeVisible();
  });
});
