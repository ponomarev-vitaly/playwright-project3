const { test, expect } = require("@playwright/test");

test.describe.parallel("iFrames tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/iframe");
  });

  test.afterEach(async ({ page }) => {
    console.log("This test is finished!");
  });

  test("Test 1", async ({ page, browserName }) => {
    //
        
    
  });
});