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
    const [fileChooser] = await Promise.all([
      page.waitForEvent("filechooser"),
      page.locator("#file-upload").click(),
    ]);

    await fileChooser.setFiles("uploadedFiles/sample.pdf");

    await page.locator('input:has-text("Upload")').click();

    await expect(page.locator("text=File Uploaded!")).toBeVisible();

    await expect(page.locator("text=sample.pdf")).toBeVisible();
  });
});
