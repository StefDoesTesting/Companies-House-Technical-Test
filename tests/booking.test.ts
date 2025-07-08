import {test, expect} from '@playwright/test'
import { BookingPage } from '../pages/BookingPage'
import { HomePage } from '../pages/HomePage';
import { EMAIL, FIRST_NAME, LAST_NAME, PHONE } from './testConstants';

test('User can book a single room', async ({ page }) => {
  await page.goto('/');

    const homePage = new HomePage(page); 
    const bookingPage = new BookingPage(page);

    await homePage.clickBookSingle();

    await bookingPage.clickReserve();
    await bookingPage.fillBookingForm(FIRST_NAME, LAST_NAME, EMAIL, PHONE);
    await bookingPage.clickReserveNow();

    await bookingPage.assertBookingConfirmed();

    await bookingPage.clickReturnHome();
});