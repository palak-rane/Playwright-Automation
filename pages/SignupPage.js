const config = require("../config");
export class SignupPage {
  constructor(page) {
    this.page = page;

    this.mr = page.getByRole("radio", { name: "Mr." });
    this.passwordInput = page.locator("#password");
    this.daySelect = page.locator("#days");
    this.monthSelect = page.locator("#months");
    this.yearSelect = page.locator("#years");
    this.newsletterCheckbox = page.locator("#newsletter");
    this.specialOffersCheckbox = page.locator("#optin");
    this.firstNameInput = page.locator("#first_name");
    this.lastNameInput = page.locator("#last_name");
    this.address1 = page.locator("#address1");
    this.countrySelect = page.locator("#country");
    this.stateInput = page.locator("#state");
    this.cityInput = page.locator("#city");
    this.zipcodeInput = page.locator("#zipcode");
    this.mobileNumberInput = page.locator("#mobile_number");
    this.createAccountButton = page.getByRole("button", {
      name: "Create Account",
    });
  }

  async fillAllInfo() {
    await this.mr.click();
    await this.passwordInput.fill(config.PASSWORD);
    await this.daySelect.selectOption("5");
    await this.monthSelect.selectOption("November");
    await this.yearSelect.selectOption("1985");
    await this.newsletterCheckbox.click();
    await this.specialOffersCheckbox.click();
    await this.firstNameInput.fill(config.FIRST_NAME);
    await this.lastNameInput.fill(config.LAST_NAME);
    await this.address1.fill(config.STREET);
    await this.countrySelect.selectOption("United States");
    await this.stateInput.fill("California");
    await this.cityInput.fill(config.CITY);
    await this.zipcodeInput.fill(config.POSTAL_CODE);
    await this.mobileNumberInput.fill(config.MOBILE_NUM);
    await this.createAccountButton.click();
  }
}
