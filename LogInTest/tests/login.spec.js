const {test, expect} = require("@playwright/test");

test("applitools login", async ({page}) => {
    
    // go to the url
    await page.goto("https://demo.applitools.com/");

    // click the username textbox
    await page.locator('[placeholder="Enter your username"]').click();

    // fill the username 
    await page.locator('[placeholder="Enter your username"]').fill("Feyza");

    // click the password textbox
    await page.locator('[placeholder="Enter your password"]').click();

    // fill the password
    await page.locator('[placeholder="Enter your password"]').fill("1234");

    // click the sign in button
    await page.locator('text=Sign in').click();

    // expects to go the page after sign in
    await expect(page).toHaveURL('https://demo.applitools.com/app.html');
});

test("orangehrmlive login", async ({page}) => {
    
    // go to the url
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    // click the username textbox
    await page.locator('[placeholder="Username"]').click();

    // fill the username 
    await page.locator('[placeholder="Username"]').fill("Admin");

    // click the password textbox
    await page.locator('[placeholder="Password"]').click();

    // fill the password
    await page.locator('[placeholder="Password"]').fill("admin123");

    // click the log in button
    await page.locator('button:has-text("Login")').click();

    // expects to go the page after log in
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
});

test("nopcommerce login", async ({page}) => {
    
    // go to the url
    await page.goto("https://admin-demo.nopcommerce.com/login");

    // click the username textbox
    await page.locator('[name="Email"]').click();

    // fill the username 
    await page.locator('[name="Email"]').fill("admin@yourstore.com");

    // click the password textbox
    await page.locator('[name="Password"]').click();

    // fill the password
    await page.locator('[name="Password"]').fill("admin");

    // click the log in button
    await page.locator('button:has-text("Log in")').click();

    // expects to go the page after log in
    await expect(page).toHaveURL('https://admin-demo.nopcommerce.com/admin/');

    // click the logout link
    await page.locator('a:has-text("Logout")').click();

    // expects to go the page after log out
    await expect(page).toHaveURL('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F');

});
