import config from "../../config";
import { test } from "../../fixture";
import { expect } from "@playwright/test";

test("Register/signup user", async ({
  page,
  homePage,
  signupLoginPage,
  signupPage,
}) => {
  await homePage.gotoHomePage();
  await expect(homePage.header).toBeVisible();
  await expect(homePage.slider).toBeVisible();
  await homePage.signupLoginButton.click();

  await expect(signupLoginPage.newUserSignupHeading).toBeVisible();
  await signupLoginPage.fillNameAndEmail();
  await expect(page.getByText("Enter Account Information")).toBeVisible();

  await signupPage.fillAllInfo();
  await expect(page.getByText("Account Created!")).toBeVisible();
  await page.getByRole("link", { name: "Continue" }).click();
  expect(page.getByText("Logged in as " + config.FIRST_NAME));

  /*await homePage.deleteAccountButton.click();
    await expect(page.getByText("Account Deleted!")).toBeVisible()
    await page.pause();  */
});

test("Valid user login.", async ({ page, homePage, signupLoginPage }) => {
  await homePage.gotoHomePage();
  await homePage.signupLoginButton.click();
  await signupLoginPage.fillEmailAndPass();
  expect(page.getByText("Logged in as")).toBeVisible();
});
