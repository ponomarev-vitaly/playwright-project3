const { test, expect } = require("@playwright/test");
const path = require("path"); // подключаем модуль path для работы с путями

test.describe("Download files tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/download"); // указываем полный URL
  });

  test.afterEach(async ({ page }) => {
    console.log("This test is finished!");
  });

  test("Test 1", async ({ page, browserName }) => {
    const downloadPromise = page.waitForEvent("download");
    await page.getByText("test-file.txt").click(); // убираем 'text='
    const download = await downloadPromise;

    // Сохраняем файл в указанное место
    const savePath = path.join("/path/to/save/at", download.suggestedFilename());
    await download.saveAs(savePath);

    const url = download.url();
    console.log("Saved file path:", savePath);
    console.log("Download URL:", url);
  });
});
