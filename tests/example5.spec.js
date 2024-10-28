const { test, expect } = require("@playwright/test");

test.describe("Download files tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/download");
  });

  test.afterEach(async ({ page }) => {
    console.log("This test is finished!");
  });

  test("Test 1", async ({ page, browserName }) => {
    //
    // Start waiting for download before clicking. Note no await.
    const downloadPromise = page.waitForEvent("download");
    await page.getByText('text=test-file.txt').click();
    const download = await downloadPromise;

    // Wait for the download process to complete and save the downloaded file somewhere.
    await download.saveAs("/path/to/save/at/" + download.suggestedFilename());
    const url = download.url();
    console.log(path);
    console.log(url);

  });
});
