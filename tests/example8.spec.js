const { test, expect } = require("@playwright/test");

test.describe("Hovers tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/hovers");
  });

  test.afterEach(async ({ page }) => {
    console.log("This test is finished!");
  });

  test("Test 1", async ({ page, browserName }) => {
    //
    await page.hover();
    
  });
});
