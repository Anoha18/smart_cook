const puppeteer = require('puppeteer');

// const url = 'https://www.povarenok.ru/recipes/search/?ing=1';

const loadBrowser = async (url, params) => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
  
    await page.goto(url, {
      timeout: 0,
      waitUntil: 'networkidle2'
    });
    
    if (!params.ingredients || !Array.isArray(params.ingredients)) {
      throw new Error('Incorrect params');
    }

    for (const index in params.ingredients) {

      await page.type('#es_input_cats_add', params.ingredients[+index]);
      await page.waitFor(500);

      const el = await page.evaluateHandle((ingredient) => {
        const elements = document.querySelectorAll('.ui-menu-item');
        let findEl;
        
        if (elements.length > 1) {
          for (const element of elements) {
            if (element.innerText.toLowerCase() == ingredient.toLowerCase()) {
              findEl = element
            }
          }
        } else if (elements.length == 1) {
          findEl = elements[0];
        } else {
          findEl = null;
        }


        return findEl;
      }, params.ingredients[+index]);
  
      if (!el) {
        continue;
      }

      await el.click();
    }

    await (await page.$('#exs_sostav_no > div.b-box > button')).click();

    await page.waitForNavigation({timeout: 0});

    const recipes = await page.evaluateHandle(() => {
      // elements = document.querySelectorAll('#cooking_list > div.cooking-block > div > div > a');
      elements = document.querySelectorAll('.anonce-cont-side');

      return elements;
    });
    console.log(recipes);
    // const hrefs = await recipes.

    setInterval(async () => {
      await browser.close();
    }, 1000000);
  } catch (error) {
    console.error(error);

    await browser.close();
  }
};

module.exports = {
  loadBrowser,
};