import { test } from "../fixture";
import { expect } from "@playwright/test";
import config from "../config";
let username;
let password;
let productName;

test("buy sleeveless dress succesfully", async ({
  page,
  loginPage,
  productPage,
  cartPage,
  checkoutPage,
  paymentPage,
}) => {
  username = config.LOGIN_EMAIL;
  password = config.LOGIN_PASSWORD;
  productName = "sleeveless dress";

  await loginPage.goto();
  await loginPage.login(username, password);
  await expect(page).toHaveTitle("Automation Exercise");

  await productPage.goto();
  await productPage.searchProduct(productName);
  await productPage.clickDropShadowTopPath();
  await productPage.addProductToCart();

  await expect(await cartPage.getProductLinkAtCart(productName)).toHaveCount(1);
  await cartPage.proceedToCheckoutBtn.click();

  await expect(page).toHaveTitle("Automation Exercise - Checkout");
  await expect(checkoutPage.addressDetailLabel).toHaveText("Address Details");
  await expect(checkoutPage.reviewYourOrderLabel).toHaveText(
    "Review Your Order",
  );
  await expect(
    await checkoutPage.getProductLinkAtCheckout(productName),
  ).toHaveCount(1);
  await checkoutPage.placeOrderBtn.click();

  await paymentPage.fillPaymentForm(
    config.FIRST_NAME,
    config.CARD_NUMBER,
    config.CVC_NUM,
    config.EXP_MONTH,
    config.EXP_YEAR,
  );
  await expect(await paymentPage.orderplacedLabel).toHaveText("Order Placed!");

  await paymentPage.clickDownloadInvoice();
});
