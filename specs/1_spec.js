// spec.js
describe('Protractor Demo App1', function() {
  it('should greet the named user', function() {
    browser.executeScript("sauce:context=Going to 'Oildex.com'");
    browser.get('https://odx.oildex.com/supplier/');
    browser.driver.sleep(3000);

    browser.executeScript("sauce:context=Enter Username and Password");
    element(by.id('username')).sendKeys('Tecnics_SupplierTestUser1');
    element(by.id('password')).sendKeys('Chinook12');

    browser.executeScript("sauce:context=Click on Submit button");
    element(by.id('Submit')).click();
    browser.driver.sleep(3000);

  });
});