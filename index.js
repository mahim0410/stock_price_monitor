



// var price = 0;


const puppeteer = require("puppeteer");

for (let i = 0; i < 1; i++) {
    start();
    async function start() {

        const url = "https://finance.yahoo.com/quote/TSLA?p=TSLA";

        const browser = await puppeteer.launch({
            headless: true
        });

        const page = await browser.newPage();

        await page.goto(url, {
            waitUntil: "domcontentloaded",
            timeout: 0
        });

        var element = await page.waitForSelector('::-p-xpath(//*[@id="main-content-wrapper"]/section[1]/div[2]/div[1]/section/div/section/div[1]/span[1])');

        var price = await page.evaluate(element => element.textContent, element);

        console.log("The tesla Price is:", price);
        console.log(price);
        await browser.close();
    };

}







// function test() {
//     console.log("Testing")
// }
