

require('chromedriver');
const assert = require('assert');
const {Builder, Key, By, until} = require('selenium-webdriver');
describe('Rejestracja', function () {
    let driver;
    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });

    it('rejestracja', async function() {

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

        await driver.findElement(By.id('nazwisko1')).sendKeys(nazwisko, Key.RETURN);

        await driver.findElement(By.id('imie1')).sendKeys(imie, Key.RETURN);
        await driver.findElement(By.id('telefon1')).sendKeys(telefon, Key.RETURN);
        await driver.findElement(By.id('ulica1')).sendKeys(ulica, Key.RETURN);
        await driver.findElement(By.id('nr_domu1')).sendKeys(numerdomu, Key.RETURN);
        await driver.findElement(By.id('nr_mieszkania1')).sendKeys(numermieszkania, Key.RETURN);
        await driver.findElement(By.id('miejscowosc1')).sendKeys(miejscowosc, Key.RETURN);
        await driver.findElement(By.id('kod_pocztowy1')).sendKeys(kodpocztowy, Key.RETURN);
        await driver.findElement(By.id('uniform-przenies')).click();
        await driver.findElement(By.id('em1')).sendKeys(email, Key.RETURN);
        await driver.findElement(By.id('haslo11')).sendKeys(haslo, Key.RETURN);
        await driver.findElement(By.id('haslo21')).sendKeys(haslo2, Key.RETURN);
        await driver.findElement(By.id('zgoda')).click();
        await driver.findElement(By.id('uniform-newsletter')).click();
        await driver.findElement(By.css("[class='submit-next']")).click();;

        await driver.wait(until.elementLocated(By.css("[class='submit-next']")), 10000);
        await driver.findElement(By.css("[class='submit-next']")).click();

    });


    after(() => driver && driver.quit());
})