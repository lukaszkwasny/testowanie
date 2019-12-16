require('chromedriver');
var faker = require('faker');
var assert = require('assert');
var types = require('./types.js');
var {Builder, Key, By, until} = require('selenium-webdriver');
describe('sklep', function () {
    let driver;
    before(async function () {
        driver = await new Builder().forBrowser('chrome').build();
    });

    it('sklep', async function () {

        var pageurl = "http://automationpractice.com/index.php";
        await driver.get(pageurl);
        driver.manage().window().maximize();
        assert(URL = pageurl);
        await driver.findElement(By.xpath("//input[@id='search_query_top']")).sendKeys("Printed Chiffon Dress", Key.ENTER);
        await driver.findElement(By.xpath("//div[@class='right-block']//a[@class='product-name'][contains(text(),'Printed Chiffon Dress')]")).click();
        await driver.findElement((By.xpath("//button[@name='Submit']"))).click();
        await driver.findElement(By.xpath("//div[3]/div/p/button/span")).click();
        await driver.sleep(1000);
        await driver.findElement(By.className("btn btn-default button button-medium")).click();


        await driver.findElement(By.xpath("//a[@class='button btn btn-default standard-checkout button-medium']")).click();
        await driver.findElement(By.xpath(types.EMAIL_INPUT)).sendKeys("buleczka_94@o2.pl");
        await driver.findElement(By.xpath(types.PASSWORD1_INPUT)).sendKeys("taktak");
        await driver.findElement(By.xpath("//p[@class='submit']//span[1]")).click();
        await driver.findElement(By.xpath("//textarea[@name='message']")).sendKeys("thx for transaction", Key.RETURN);
        await driver.findElement(By.xpath("//button[@name='processAddress']//span[contains(text(),'Proceed to checkout')]")).click();
        await driver.findElement(By.xpath(" //input[@id='cgv']")).click();
        await driver.findElement(By.xpath("//button[@name='processCarrier']//span[contains(text(),'Proceed to checkout')]")).click();
        await driver.findElement(By.xpath("//a[@class='bankwire']//span[contains(text(),'(order processing will be longer)')]")).click();
        await driver.findElement(By.xpath("//span[contains(text(),'I confirm my order')]")).click();


        await driver.sleep(3000);

    });


    after(() => driver && driver.quit());
})