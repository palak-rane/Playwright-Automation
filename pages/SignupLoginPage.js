const config = require("../config");
export class SignupLoginPage {
  constructor(page) {
    this.page = page;
    this.newUserSignupHeading = this.page.getByRole("heading", {
      name: "New User Signup!",
    });
    this.signupNameInput = this.page.getByRole("textbox", { name: "Name" });
    this.signupEmailInput = this.page.locator("input[data-qa='signup-email']");
    this.signupButton = this.page.getByRole("button", { name: "Signup" });

    this.loginEmailInput = this.page.locator("input[data-qa='login-email']");
    this.loginpasswordInput = this.page.getByRole("textbox", {
      name: "Password",
    });
    this.loginButton = this.page.getByRole("button", { name: "Login" });
  }
  async fillNameAndEmail() {
    await this.signupNameInput.fill(config.FIRST_NAME);
    await this.signupEmailInput.fill(config.EMAIL);
    await this.signupButton.click();
  }

  async fillEmailAndPass() {
    await this.loginEmailInput.fill(config.LOGIN_EMAIL);
    await this.loginpasswordInput.fill(config.LOGIN_PASSWORD);
    await this.loginButton.click();
  }
}
