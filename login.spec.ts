import {it, describe, expect} from "@playwright/test"
import { LoginPage } from "./models/Login";

describe("Login validations", () => {

    it('Login with valid credentials', async({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigate();
        await loginPage.login("demo","mode");
        const name = await loginPage.getInnerText();
        expect(name).toBe('Login succeeded. Now you can logout.');
    });

    it('Login with invalid credentials', async({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigate();
        await loginPage.login("demo","mode1");
        const name = await loginPage.getInnerText();
        expect(name).toBe('Login failed. Invalid user name and/or password.');
    });
}) 