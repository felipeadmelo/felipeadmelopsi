const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://felipeadmelopsi.lovable.app/');
    const content = await page.content();
    
    const fs = require('fs');
    fs.writeFileSync('index.html', content);

    await browser.close();
})();