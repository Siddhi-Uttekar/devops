const { Builder, By, until } = require('selenium-webdriver');

(async function testCalculator() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Load your local HTML file
    await driver.get('./index.html'); // <-- change this to your actual path

    // Find input elements and button
    await driver.findElement(By.id('num1')).sendKeys('8');
    await driver.findElement(By.id('num2')).sendKeys('4');
    await driver.findElement(By.tagName('button')).click();

    // Wait for result to update
    await driver.sleep(1000);

    // Get the result text
    const resultText = await driver.findElement(By.id('result')).getText();

    // Assertion
    if (resultText === 'Result: 12') {
      console.log('✅ Test Passed');
    } else {
      console.log(`❌ Test Failed: Got "${resultText}"`);
    }

  } finally {
    await driver.quit();
  }
})();
