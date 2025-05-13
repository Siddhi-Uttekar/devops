# 🧪 Selenium Automated Testing with JavaScript

This project demonstrates how to use **Selenium WebDriver** for automated browser testing in **Node.js** using both plain JavaScript and **Mocha** testing framework.

---

## 📦 Prerequisites

- [Node.js](https://nodejs.org/) installed
- Google Chrome installed

---

## 🚀 Getting Started

### 1. Initialize Project

```bash
mkdir selenium-js-test
cd selenium-js-test
npm init -y
```

2. Install Dependencies
```bash
npm install selenium-webdriver
npm install chromedriver
```

🧪 Example 1: Basic Script (googleTest.js)
Create a file googleTest.js:
```bash
const { Builder, By, Key, until } = require('selenium-webdriver');

(async function googleSearch() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('https://www.google.com');

    let searchBox = await driver.findElement(By.name('q'));
    await searchBox.sendKeys('Selenium WebDriver', Key.RETURN);

    await driver.wait(until.titleContains('Selenium WebDriver'), 5000);
    console.log(await driver.getTitle());

      }
      finally {
    await driver.quit();
  }
})();

```
▶ Run the script
```bash
node googleTest.js
```