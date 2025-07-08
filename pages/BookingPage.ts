import {Page, Locator} from '@playwright/test'
import {expect} from '@playwright/test'

export class BookingPage {
    readonly page: Page;
    readonly reserveButton: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly email: Locator;
    readonly phone: Locator;
    readonly reserveNowButton: Locator;
    readonly bookButton: Locator;
    readonly bookingConfirmed: Locator;
    readonly returnHomeButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.reserveButton = page.getByRole('button', {name: 'Reserve Now'});
        this.firstName = page.getByRole('textbox', {name: 'Firstname'});
        this.lastName = page.getByRole('textbox', { name: 'Lastname' });
        this.email = page.getByRole('textbox', { name: 'Email' });
        this.phone = page.getByRole('textbox', { name: 'Phone' });
        this.bookButton = page.locator('#bookButton');
        this.reserveNowButton = page.getByRole('button', { name: 'Reserve Now' });
        this.bookingConfirmed = page.getByRole('heading', { name: 'Booking Confirmed' });
        this.returnHomeButton = page.getByRole('link', { name: 'Return home' });
    }

    // Actions
    async enterFirstname(firstName: string) {
        await this.firstName.fill(firstName);
    }
    
    async enterLastname(lastName: string) {
        await this.lastName.fill(lastName);
    }

    async enterEmail(email: string) {
        await this.email.fill(email);
    }

    async enterPhoneNumber(phone: string) {
        await this.phone.fill(phone)
    }

    async fillBookingForm(firstName: string, lastName: string, email: string, phone: string) {
        this.enterFirstname(firstName);
        this.enterLastname(lastName);
        this.enterEmail(email);
        this.enterPhoneNumber(phone);
    }

    async clickSubmit() {
        await this.bookButton.click();
    }

    async clickReserve() {
        await this.reserveButton.click();
    }

    async clickReserveNow() {
        await this.reserveNowButton.click();
    }

    async clickReturnHome() {
        await this.returnHomeButton.click();
    }

    // Assertions

    async assertBookingConfirmed() {
        expect(this.bookingConfirmed);
    }
}