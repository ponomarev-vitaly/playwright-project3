const { test, expect, firefox } = require("@playwright/test");

test.describe.parallel("Checkboxes tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/drag_and_drop");
  });

  test.afterEach(async ({ page }) => {
    console.log("This test is finished!");
  });

  test("Test 1", async ({ page, browserName }) => {
    //

    await page.dragAndDrop("#column-a", "#column-b");
    await page.pause();
  });
});