
require('chromedriver');
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

        await driver.findElement(By.id('nazwisko1')).sendKeys('kowalski', Key.RETURN);

        await driver.findElement(By.id('imie1')).sendKeys('andrzej', Key.RETURN);
        await driver.findElement(By.id('telefon1')).sendKeys('555', Key.RETURN);
        await driver.findElement(By.id('ulica1')).sendKeys('grunwaldzka', Key.RETURN);
        await driver.findElement(By.id('nr_domu1')).sendKeys('2', Key.RETURN);
        await driver.findElement(By.id('nr_mieszkania1')).sendKeys('3', Key.RETURN);
        await driver.findElement(By.id('miejscowosc1')).sendKeys('warszawa', Key.RETURN);
        await driver.findElement(By.id('kod_pocztowy1')).sendKeys('55-555', Key.RETURN);
        await driver.findElement(By.id('uniform-przenies')).click();
        await driver.findElement(By.id('em1')).sendKeys('lukaszssssssss@o2.pl', Key.RETURN);
        // zmień email aby test przeszedł
        await driver.findElement(By.id('haslo11')).sendKeys('haslo11', Key.RETURN);
        await driver.findElement(By.id('haslo21')).sendKeys('haslo11', Key.RETURN);
        await driver.findElement(By.id('zgoda')).click();
        await driver.findElement(By.id('uniform-newsletter')).click();
        await driver.findElement(By.css("[class='submit-next']")).click();;

        await driver.wait(until.elementLocated(By.css("[class='submit-next']")), 10000);
        await driver.findElement(By.css("[class='submit-next']")).click();

    });


    after(() => driver && driver.quit());
})