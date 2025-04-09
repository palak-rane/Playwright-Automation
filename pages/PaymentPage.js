export class PaymentPage{
 constructor(page)
 {
    this.page=page;
    this.nameOnCardInput = page.locator('input[name="name_on_card"]');
    this.cardNumberInput = page.locator('input[name="card_number"]');
    this.CVCInput = page.locator('input[placeholder="ex. 311"]');
    this.expiryMonthInput = page.locator('input[placeholder="MM"]');
    this.expiryYearInput= page.locator('input[placeholder="YYYY"]');
    this.payAndConfirmOrderBtn = page.locator('#submit');
    this.orderplacedLabel = page.locator('h2[class="title text-center"] b');
    this.downloadInvoiceBtn = page.locator('a[href^="/download_invoice"]');
 }

 async fillPaymentForm(clientName, cardNumber,cvc,ExpiryMonth, ExpiryYear)
 {
    await this.nameOnCardInput.fill(clientName);
    await this.cardNumberInput.fill(cardNumber);
    await this.CVCInput.fill(cvc);
    await this.expiryMonthInput.fill(ExpiryMonth);
    await this.expiryYearInput.fill(ExpiryYear);
    await this.payAndConfirmOrderBtn.click();
 }

 async clickDownloadInvoice() {
   await this.downloadInvoiceBtn.waitFor({ state: 'visible', timeout: 5000 });

   const [download] = await Promise.all([
     this.page.waitForEvent('download'),
     this.downloadInvoiceBtn.click(),
   ]);

   const path = await download.path();
   console.log('Downloaded file path:', path);
   await download.saveAs('invoice.txt');
 }

}