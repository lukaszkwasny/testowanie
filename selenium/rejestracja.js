

require('chromedriver');
var types = require('./types.js');
var faker = require('faker');
const assert = require('assert');
const {Builder, Key, By, until} = require('selenium-webdriver');
describe('Rejestracja', function () {
    let driver;
    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });

    it('rejestracja', async function() {

      
       
    
        await driver.get('https://czytam.pl/');
        driver.manage().window().maximize();


        await driver.findElement(By.className('link-registered')).click();

        await driver.findElement(By.id(types.NAME_INPUT)).sendKeys(faker.name.firstName(), Key.RETURN);
        await driver.findElement(By.id(types.LASTNAME_INPUT)).sendKeys(faker.name.lastName(), Key.RETURN);
        await driver.findElement(By.id(types.PHONE_INPUT)).sendKeys(faker.random.number({min: 100000000, max: 999999999}), Key.RETURN);
        await driver.findElement(By.id(types.STREET_INPUT)).sendKeys(faker.address.streetName(), Key.RETURN);
        await driver.findElement(By.id(types.HOUSE_NUMBER_INPUT)).sendKeys(faker.random.number({min: 1, max: 200}));
        await driver.findElement(By.id(types.APARTMENS_NUMBER_INPUT)).sendKeys(faker.random.number({min: 1, max: 99}), Key.RETURN);
        await driver.findElement(By.id(types.LOCALITY_INPUT)).sendKeys(faker.address.city(), Key.RETURN);
        await driver.findElement(By.id(types.ZIPCODE_INPUT)).sendKeys(faker.address.zipCode(), Key.RETURN);
        await driver.findElement(By.id('uniform-przenies')).click();
        var PASSWORD = faker.internet.password()
        await driver.findElement(By.id(types.EMAIL_INPUT)).sendKeys(faker.internet.email(), Key.RETURN);
        await driver.findElement(By.id(types.PASSWORD1_INPUT)).sendKeys(PASSWORD, Key.RETURN);
        await driver.findElement(By.id(types.PASSWORD2_INPUT)).sendKeys(PASSWORD, Key.RETURN);
        await driver.findElement(By.id(types.AGREEMENT_INPUT)).click();
        await driver.findElement(By.id('uniform-newsletter')).click();
        await driver.findElement(By.css("[class='submit-next']")).click();

        await driver.wait(until.elementLocated(By.css("[class='submit-next']")), 10000);
        await driver.findElement(By.css("[class='submit-next']")).click();
       await driver.findElement(By.xpath("//div[contains(@class,'alert-box medium-offset-1 success')]"));
    
        

    });


    after(() => driver && driver.quit());
})