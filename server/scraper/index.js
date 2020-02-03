const puppeteer = require('puppeteer');

// const url = 'https://www.povarenok.ru/recipes/search/?ing=1';

const loadBrowser = async (url, params) => {
  const browser = await puppeteer.launch({headless: false});

  try {
    const page = await browser.newPage();
  
    await page.goto(url, {
      // waitUntil: 'load',
      timeout: 0,
      waitUntil: 'networkidle2'
    });
    
    if (!params.ingredients || !Array.isArray(params.ingredients)) {
      throw new Error('Incorrect params');
    }

    for (const index in params.ingredients) {

      await page.type('#es_input_cats_add', params.ingredients[+index]);
      await page.waitFor(500);

      const el = await page.evaluateHandle(() => {
        console.log(params);
        const elements = document.querySelectorAll('.ui-menu-item');
        let findEl;

        for (const element of elements) {
          if (element.innerText.toLowerCase() == params.ingredients[+index].toLowerCase()) {
            findEl = element
          }
        }

        return findEl;
      }, params);
  
      await el.click();
    }

    setInterval(async () => {
      await browser.close();
    }, 1000000);
  } catch (error) {
    console.error(error);

    // await browser.close();
  }
};

module.exports = {
  loadBrowser,
};