require('module-alias/register');
const FOBasePage = require('@pages/FO/FObasePage');

class MyAccount extends FOBasePage {
  constructor() {
    super();

    this.pageTitle = 'My account';

    // Selectors
    this.accountInformationLink = '#identity-link';
    this.accountHistoryLink = '#history-link';
    this.accountAddressesLink = '#addresses-link';
  }

  /*
  Methods
   */

  /**
   * Go to account information page
   * @param page
   * @return {Promise<void>}
   */
  async goToInformationPage(page) {
    await this.clickAndWaitForNavigation(page, this.accountInformationLink);
  }

  /**
   * Go to order history page
   * @param page
   * @returns {Promise<void>}
   */
  async goToHistoryAndDetailsPage(page) {
    await this.waitForSelectorAndClick(page, this.accountHistoryLink);
  }

  /**
   * Go to addresses page
   * @param page
   * @returns {Promise<void>}
   */
  async goToAddressesPage(page) {
    await this.clickAndWaitForNavigation(page, this.accountAddressesLink);
  }
}

module.exports = new MyAccount();
