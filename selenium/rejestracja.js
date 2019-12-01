

require('chromedriver');
const assert = require('assert');
const {Builder, Key, By, until} = require('selenium-webdriver');
describe('Rejestracja', function () {
    let driver;
    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });

    it('rejestracja', async function() {

        var types = require('./types.js');
        var faker = require('faker');
        var email = faker.internet.email();
        var telefon = faker.random.number({min: 100000000, max: 999999999});
        var nazwisko = faker.name.lastName();
        var imie = faker.name.firstName();
        var ulica = faker.address.streetName();
        var numerdomu = faker.random.number({min: 1, max: 200});
        var numermieszkania = faker.random.number({min: 1, max: 99});
        var miejscowosc = faker.address.city();;
        var kodpocztowy = faker.address.zipCode();
        var haslo =faker.internet.password() ;
        var haslo2 = haslo;
        
        await driver.get('https://czytam.pl/');
        driver.manage().window().maximize();


        await driver.findElement(By.className('link-registered')).click();

        await driver.findElement(By.id(types.NAME_INPUT)).sendKeys(imie, Key.RETURN);
        await driver.findElement(By.id(types.LASTNAME_INPUT)).sendKeys(nazwisko, Key.RETURN);
        await driver.findElement(By.id(types.PHONE_INPUT)).sendKeys(telefon, Key.RETURN);
        await driver.findElement(By.id(types.STREET_INPUT)).sendKeys(ulica, Key.RETURN);
        await driver.findElement(By.id(types.HOUSE_NUMBER_INPUT)).sendKeys(numerdomu, Key.RETURN);
        await driver.findElement(By.id(types.APARTMENS_NUMBER_INPUT)).sendKeys(numermieszkania, Key.RETURN);
        await driver.findElement(By.id(types.LOCALITY_INPUT)).sendKeys(miejscowosc, Key.RETURN);
        await driver.findElement(By.id(types.ZIPCODE_INPUT)).sendKeys(kodpocztowy, Key.RETURN);
        
        await driver.findElement(By.id('uniform-przenies')).click();
        await driver.findElement(By.id(types.EMAIL_INPUT)).sendKeys(email, Key.RETURN);
        await driver.findElement(By.id(types.PASSWORD1_INPUT)).sendKeys(haslo, Key.RETURN);
        await driver.findElement(By.id(types.PASSWORD2_INPUT)).sendKeys(haslo2, Key.RETURN);
        await driver.findElement(By.id(types.AGREEMENT_INPUT)).click();
        await driver.findElement(By.id('uniform-newsletter')).click();
        await driver.findElement(By.css("[class='submit-next']")).click();

        await driver.wait(until.elementLocated(By.css("[class='submit-next']")), 10000);
        await driver.findElement(By.css("[class='submit-next']")).click();
       await driver.findElement(By.xpath("//div[contains(@class,'alert-box medium-offset-1 success')]"));
    
        

    });


    after(() => driver && driver.quit());
})