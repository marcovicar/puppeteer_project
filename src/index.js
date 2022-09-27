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
    await page.goto('https://www.educacao.df.gov.br/escolas-distrito-federal/');
    // await page.screenshot({ path: 'meugit.png' });
    const urls = await page.$$eval("#conteudo > div > .tab-content > #tbpublica > .panel-success > div > .panel-body > p:nth-child(3) > span > a", (el) => {
        return el.map((a) => a.getAttribute("href"));
    });

    const urls2 = await page.$$eval("#conteudo > div > .tab-content > #tbpublica > .panel-success > div > .panel-body > p:nth-child(2) > span > a", (el) => {
        return el.map((a) => a.getAttribute("href"));
    });

    await browser.close();

    urls2.shift();

    const urlsEscPublica = urls.concat(urls2);

    return console.log(urlsEscPublica);

})();