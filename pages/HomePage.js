// HomePage.js
const config = require("../config");

export class HomePage {
  constructor(page) {
    this.page = page;
    this.header = this.page.locator("#header");
    this.slider = this.page.locator("#slider");
    this.signupLoginButton = this.page.getByRole("link", {
      name: "Signup / Login",
    });
    this.deleteAccountButton = this.page.getByRole("link", {
      name: "Delete Account",
    });
    this.logoutButton = this.page.getByRole("link", { name: "Logout" });
    this.contactUsButton = this.page.getByRole("link", { name: "Contact us" });
    this.testCaseButton = this.page.getByRole("link", { name: "Test Cases" });
    this.productButton = this.page.getByRole("link", { name: " Products" });
    this.consentButton = this.page.locator("button.fc-cta-consent");
  }

  async gotoHomePage() {
    await this.page.goto(config.URL);
    await this.consentButton.click();
  }
}
