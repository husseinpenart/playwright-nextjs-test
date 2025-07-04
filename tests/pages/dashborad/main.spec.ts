import test, { expect } from "@playwright/test";

test.use({ storageState: "storage/logged-in.json" });
test("welcomeTo dashboard", async ({ page }) => {
  await page.goto("http://localhost:3000/dashboard");
  await expect(page.getByText("Welcome")).toBeVisible();
});
