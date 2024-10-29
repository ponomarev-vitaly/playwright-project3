const { test, expect } = require("@playwright/test");

test.describe("Key Presses tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/key_presses");
  });

  test.afterEach(async ({ page }) => {
    console.log("This test is finished!");
  });

  test("Test 1", async ({ page, browserName }) => {
    //
    await page.press('#target', 'F1');
  });
});