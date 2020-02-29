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

    const namesRecipes = (await page.$('#cooking_list > div.cooking-block > div > div > a')).map(item => {
      console.log(item);
      return item.text;
    })
    console.log(namesRecipes);
    // const recipes = await page.evaluateHandle(() => {
    //   // elements = document.querySelectorAll('#cooking_list > div.cooking-block > div > div > a');
    //   const elements = document.querySelectorAll('.anonce-cont-side');
    //   const nameRecipes = [];
    //   document.querySelectorAll('#cooking_list > div.cooking-block > div > div > a').forEach(item => {
    //     nameRecipes.push(item.text)
    //   });
      
    //   const links = document.querySelectorAll('#cooking_list > div.cooking-block > div > div > a');

    //   const descriptions = [];
    //   document.querySelectorAll('#cooking_list > div.cooking-block > div > div > div.anonce-cont-side-info > div').forEach(item => {
    //     descriptions.push(item.innerText);
    //   });

    //   console.log('names: ', nameRecipes);
    //   console.log('links: ', links);
    //   console.log('descr: ', descriptions);
    //   return {
    //     elements,
    //     nameRecipes,
    //     links,
    //     descriptions
    //   };
    // });
    // console.log(recipes);
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