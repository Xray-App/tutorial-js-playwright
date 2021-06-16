import { test, expect } from "@playwright/test"
import { LoginPage } from "./models/Login";

test.describe("Login validations", () => {

    test('Login with valid credentials', async({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigate();
        await loginPage.login("demo","mode");
        const name = await loginPage.getInnerText();
        expect(name).toBe('Login succeeded. Now you can logout.');
    });

    test('Login with invalid credentials', async({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigate();
        await loginPage.login("demo","mode1");
        const name = await loginPage.getInnerText();
        expect(name).toBe('Login failed. Invalid user name and/or password.');
    });
}) 