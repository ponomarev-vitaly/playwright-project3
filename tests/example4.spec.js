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
    const frameTest = page.frameLocator('#mce_0_ifr').locator('body p');
    await frameTest.click();
    await frameTest.type('body p', "This is just a test typing if everuthing is working OK!");
    await page.pause();        
    
  });
});