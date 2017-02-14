module.exports = {
  url: "https://thesuncouk-si.go-vip.co/",
  elements: {
    extended_header_button: { 
      selector: '.sun-newsuk__button.open-newsuk' 
    },
    extended_header: { 
      selector: '.sun-newsuk' 
    },
    logo: { 
      selector: '#logo' 
    },
    weather_widget: { 
      selector: '.weather' 
    },
    weather_widget_open: {
      selector: '.weather-content .place.open-popup-box'
    },
    weather_widget_input: {
      selector: '.weather-content .popup-box form .input-text-wrap input'
    },
    weather_suggestion: {
      selector: '.weather-content .popup-box form .suggestions ul li.place'
    },
    weather_location: {
      selector: '.place-inner'
    },
    sign_in: { 
      selector: '.follow .sign-in' 
    },
    edition_switcher: { 
      selector: '.follow .edition a' 
    },
    search_bar: { 
      selector: '.follow .search-bar' 
    },
    search_bar_input: {
      selector: '.search-bar .popup-box form input'
    },
    submit_search: { 
      selector: '//div[2]/div[3]/div[3]/div[3]/div/form/input[2]', 
      locateStrategy: 'xpath' 
    },
    back_to_top_button: {
      selector: '.back-to-top',
    }
  }
};