import { Page } from "@playwright/test";

export const UserLogin = async (page: Page) => {
  await page.getByLabel("Username").fill("hussein");
  await page.getByLabel("Password").fill("123456");
  await page.getByRole("button", { name: "Login" }).click();
  await page.waitForURL("**/dashboard");
};
