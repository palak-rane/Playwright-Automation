import { expect } from "@playwright/test";

export class ProductPage {
  constructor(page) {
    this.page = page;
    this.searchInput = page.locator("#search_product");
    this.searchButton = page.locator("#submit_search");
  }

  async goto() {
    await this.page.goto("/products");
  }

  async searchProduct(productName) {
    await this.searchInput.fill(productName);
    await this.searchButton.click();
  }

  async addProductToCart() {
    await this.page.hover(`a:text("Add to cart")`);
    const addToCartLink = await this.page.waitForSelector(
      ".product-overlay  .overlay-content a",
      { timeout: 6000 },
    );
    await addToCartLink.click();

    const successMessageLocator = this.page.locator(
      '.modal-body p:text("Your product has been added to cart.")',
    );
    await successMessageLocator.waitFor({ state: "visible", timeout: 6000 });

    const successMessageText = await successMessageLocator.innerText();
    await expect(successMessageText).toBe(
      "Your product has been added to cart.",
    );

    const viewCartLink = this.page.locator('.modal-body a[href="/view_cart"]');
    await viewCartLink.click();
  }

  async clickDropShadowTopPath() {
    // Wait 1 second
    await this.page.waitForTimeout(1000);

    // Click the path using JavaScript
    await this.page.evaluate(() => {
      const svg = document.querySelector("svg");
      const path = svg?.querySelector('path[stroke="#FAFAFA"][fill="#FAFAFA"]');
      if (path) {
        path.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      }
    });
  }
}
