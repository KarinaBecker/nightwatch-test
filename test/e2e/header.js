var header = null;

module.exports = {
  'Header elements visible' : function (browser) {
    header = browser.page.header();

    browser.maximizeWindow();
    
    header.navigate()
      .waitForElementVisible('body', 1000)
      .verify.title('News, sport, celebrities and gossip | The Sun')
      .verify.visible('@extended_header_button')
      .verify.visible('@logo')
      .verify.visible('@weather_widget')
      .verify.visible('@edition_switcher')
      .verify.visible('@sign_in')
      .verify.visible('@search_bar');
  },
  
  'Extended News UK header functionality' : function () {
    header.click('@extended_header_button')
      .waitForElementVisible('@extended_header', 3000)
      .verify.visible('@extended_header')
      .click('@extended_header_button');
  },

  'Weather widget functionality' : function (browser) {
    header.click('@weather_widget_open')
      .setValue('@weather_widget_input', 'Birmingham')
      .waitForElementVisible('@weather_suggestion', 1000)
      .click('@weather_suggestion')
      .waitForElementVisible('@weather_location', 1000);

    browser.pause(1000);

    header.verify.containsText('@weather_location','Birmingham');
  },

  'Search bar functionality' : function (browser) {
    header.click('@search_bar')
      .setValue('@search_bar_input', 'London')
      .click('@submit_search')
      .waitForElementVisible('.search-result-count .suggestion', 3000)
      .verify.visible('.search-result-count .suggestion')
      .verify.containsText('.search-result-count .suggestion','London');

    browser.back();
  },

  'Scroll-to-top button functionality' : function (browser) {
    browser.execute('scrollTo(0,5000)');

    header.verify.visible('@back_to_top_button')
      .click('@back_to_top_button')
      .waitForElementVisible('@logo', 1000)
      .verify.visible('@logo');
      
    browser.end();
  }
};