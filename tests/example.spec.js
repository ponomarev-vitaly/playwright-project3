const { test, expect, firefox } = require("@playwright/test");

test.describe.parallel("Smoke tests - Herokuapp", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test.afterEach(async ({ page }) => {
    console.log("This test is finished!");
  });

  

  test("Second test @regression @herokuapp", async ({ page, browserName }) => {
    //
    await page.pause();
    
  });

  test("Duplicate test @smoke @herokuapp", async ({ page }) => {
    //
    await page.pause();
    
  });

  test("Duplicate test @regression @herokuapp", async ({ page }) => {
    //
    await page.pause();
    
  });
});