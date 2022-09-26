const puppeteer = require('puppeteer');

(async() => {
    const browser = await puppeteer.launch({
        // headless: false
    });
    const page = await browser.newPage();
    await page.setViewport({
        width: 1920,
        height: 1080
    });
    await page.goto('https://github.com/marcovicar');
    await page.screenshot({ path: 'meugit.png' });

    await browser.close();
})();