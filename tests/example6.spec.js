const { test, expect } = require("@playwright/test");

test.describe.parallel("Upload files tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/upload");
  });

  test.afterEach(async ({ page }) => {
    console.log("This test is finished!");
  });

  test("Test 1", async ({ page, browserName }) => {
    //
           
    
  });
});