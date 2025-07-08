import {test, expect} from '@playwright/test'
import { AdminLoginPage } from '../pages/AdminLoginPage';
import { HomePage } from '../pages/HomePage';
import { ADMIN_PASSWORD_CORRECT, ADMIN_PASSWORD_INCORRECT, ADMIN_USERNAME_CORRECT, ADMIN_USERNAME_INCORRECT } from './testConstants';

test('User can log in with correct details', async ({ page }) => {
  await page.goto('/');

    const homePage = new HomePage(page); 
    const adminPage = new AdminLoginPage(page);

    await homePage.clickAdmin();

    await adminPage.assertUrl();

    await adminPage.enterUsername(ADMIN_USERNAME_CORRECT);
    await adminPage.enterPassword(ADMIN_PASSWORD_CORRECT);
    await adminPage.clickLogin();

    // Assert url user ends up on
});

test('User can not log in with incorrect password', async ({ page }) => {
  await page.goto('/');

    const homePage = new HomePage(page); 
    const adminPage = new AdminLoginPage(page);

    await homePage.clickAdmin();

    await adminPage.assertUrl();

    await adminPage.enterUsername(ADMIN_USERNAME_CORRECT);
    await adminPage.enterPassword(ADMIN_PASSWORD_INCORRECT);
    await adminPage.clickLogin();

    await adminPage.assertLoginError();
});