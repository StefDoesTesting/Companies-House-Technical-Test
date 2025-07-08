import {Page, Locator} from '@playwright/test'
import {expect} from '@playwright/test'
import { ADMIN_URL, AMENITIES_URL, BOOKING_URL, CONTACT_URL, LOCATION_URL, ROOMS_URL } from './pagesConstants';

export class HomePage {
    readonly page: Page;
    readonly rooms: Locator;
    readonly booking: Locator;
    readonly amenities: Locator;
    readonly location: Locator;
    readonly contact: Locator;
    readonly admin: Locator;

    // rooms section should prob put in own class
    readonly singleRoom: Locator;
    readonly doubleRoom: Locator;
    readonly suite: Locator;

    constructor(page: Page) {
        this.page = page;
        this.rooms = page.locator('#navbarNav').getByRole('link', { name: 'Rooms' });
        this.booking = page.locator('#navbarNav').getByRole('link', { name: 'Booking' });
        this.amenities = page.getByRole('link', { name: 'Amenities' });
        this.location = page.getByRole('link', { name: 'Location' });
        this.contact = page.locator('#navbarNav').getByRole('link', { name: 'Contact' }); 
        this.admin = page.getByRole('link', { name: 'Admin', exact: true })

        // rooms section should prob put in own class
        this.singleRoom = page.locator('div').filter({ hasText: /^£100 per nightBook now$/ }).getByRole('link');
        this.doubleRoom = page.locator('div').filter({ hasText: /^£150 per nightBook now$/ }).getByRole('link');
        this.suite = page.locator('div').filter({ hasText: /^£225 per nightBook now$/ }).getByRole('link');
    }

    async clickRooms() {
        await this.rooms.click();
        expect(this.page.url()).toContain(ROOMS_URL)
    }

    async clickBooking() {
        await this.booking.click();
        expect(this.page.url()).toContain(BOOKING_URL)
    }

    async clickAmenities() {
        await this.booking.click();
        expect(this.page.url()).toContain(AMENITIES_URL)
    }

    async clickLocation() {
        await this.location.click()
        expect(this.page.url()).toContain(LOCATION_URL)
    }

    async clickContact() {
        await this.contact.click()
        expect(this.page.url()).toContain(CONTACT_URL)
    }

    async clickAdmin() {
        await this.admin.click();
        expect(this.page.url()).toContain(ADMIN_URL)
    }

    // rooms section should prob put in own class
    async clickBookSingle() {
        await this.singleRoom.click();
    }

    async clickBookDouble() {
        await this.doubleRoom.click();
    }

    async clickBookSuite() {
        await this.suite.click();
    }
}