export class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.addressDetailLabel = page.locator(
      'section[id="cart_items"] div:nth-child(2) h2:nth-child(1)',
    );
    this.reviewYourOrderLabel = page.locator(
      '//h2[normalize-space()="Review Your Order"]',
    );
    this.placeOrderBtn = page.locator('//a[normalize-space()="Place Order"]');
  }

  async getProductLinkAtCheckout(productName) {
    return this.page.locator('td[class="cart_description"] h4');
  }
}
