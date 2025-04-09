export class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator("[data-qa=login-email]");
    this.passwordInput = page.locator("[data-qa=login-password]");
    this.LoginBtn = page.locator("[data-qa=login-button]");
    this.consentButton = this.page.locator("button.fc-cta-consent");
  }

  async goto() {
    await this.page.goto("/login");
    await this.consentButton.click();
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.LoginBtn.click();
  }
}
