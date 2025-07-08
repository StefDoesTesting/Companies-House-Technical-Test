import {Page, Locator} from '@playwright/test'
import {expect} from '@playwright/test'
import { ADMIN_URL, LOGIN_ERROR } from './pagesConstants';

export class AdminLoginPage {
    readonly page: Page;
    readonly userName: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly error: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userName = page.getByRole('textbox', { name: 'Username' });
        this.password = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.error = page.getByText(LOGIN_ERROR);
    }

    // Actions

    async enterUsername(userName: string) {
        await this.userName.fill(userName);
    }

    async enterPassword(password: string) {
        await this.password.fill(password);
    }

    async clickLogin() {
        await this.loginButton.click();;
    }

    // Assertions

    async assertLoginError() {
        expect(this.error);
    }

    async assertUrl() {
        expect(this.page.url()).toContain(ADMIN_URL)
    }
}