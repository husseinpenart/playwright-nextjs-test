import { expect, test } from "@playwright/experimental-ct-react";
import Button from "../../../app/components/Button";
test("showing the label of button", async ({ mount }) => {
  const component = await mount(<Button label=" Hello User" />);
  await expect(component).toContainText(" Hello User");
});
