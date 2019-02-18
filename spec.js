browser.waitForAngularEnabled(false);

describe('Protractor Illuminate App', function() {

    beforeEach(function() {
        browser.get('https://demo.illuminateed.com/live/?prev_page=Main_NotDashboardPage&page=SisLogin');
    });

    it('verify if user cannot login without valid username/pw', function() {
        element(by.id('username')).sendKeys('jeannchung');
        element(by.id('password')).sendKeys('jeannchung');
        element(by.id('button_next')).click();
    });

    it('verify if user cannot login with empty form fields', function() {
        element(by.id('username')).sendKeys('');
        element(by.id('password')).sendKeys('');
        element(by.id('button_next')).click();
    });

    it("verify 'forgot password' functionality", function() {
        element(by.id('forgot-password-link')).click();
        element(by.id('email_address')).sendKeys('jeannchung@gmail.com');
        element(by.id('send')).click();
        browser.navigate().back();
    })

    it('verify facebook link functionality', function() {
        element(by.id('facebook-link')).click();
        browser.getAllWindowHandles().then((handles) => {
            browser.driver.switchTo().window(handles[1]);
            browser.driver.close();
            browser.driver.switchTo().window(handles[0]);
        });
    });

    it('verify twitter link functionality', function() {
        element(by.id('twitter-link')).click();
        browser.getAllWindowHandles().then((handles) => {
            browser.driver.switchTo().window(handles[1]);
            browser.driver.close();
            browser.driver.switchTo().window(handles[0]);
        });
    });

    it('verify tumblr link functionality', function() {
        element(by.id('tumblr-link')).click();
        browser.getAllWindowHandles().then((handles) => {
            browser.driver.switchTo().window(handles[1]);
            browser.driver.close();
            browser.driver.switchTo().window(handles[0]);
        });
    });
});

// sendkeys username/pw jeannchung then submit
// test forgot pw link
//     > sendkeys jeannchung@gmail.com 
//     > navigate back
// test social media links

// verify messages for invalid login
// verify if data in pw field is visible as asterisk or bullet
// verify if enter key of keyboard works
// verify time taken to login and validate username
