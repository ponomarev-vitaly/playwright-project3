const { test, expect, firefox } = require("@playwright/test");

test.describe.parallel("Dropdown tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/dropdown");
  });

  test.afterEach(async ({ page }) => {
    console.log("This test is finished!");
  });

  test("Test 1", async ({ page, browserName }) => {
    //

    await page.locator("#dropdown").selectOption({"label": 'Option 1'});
    await page.pause();
    
  });
});