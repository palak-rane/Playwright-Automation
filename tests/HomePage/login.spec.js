import { test } from "../../fixture";
import { expect } from "@playwright/test";

test("Valid user login.", async ({
  page,
  isMobile,
  homePage,
  signupLoginPage,
}) => {
  await homePage.gotoHomePage();
  await homePage.signupLoginButton.click();
  await signupLoginPage.fillEmailAndPass();
  //expect(page.getByText("Logged in as")).toBeVisible();
  await page.waitForTimeout(3000);
});
