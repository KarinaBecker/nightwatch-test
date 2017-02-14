var article = null;

module.exports = {
    'Headline CSS': function(browser){
        article = browser.page.article();

        article.navigate()
         .assert.cssProperty('@article_headline', 'font-size', '36px')
         .assert.cssProperty('@article_headline', 'font-family', 'Roboto')
         .assert.cssProperty('@article_headline', 'display', 'inline');
    },

    'Sub-Headline CSS': function(){
        article.waitForElementVisible('@sub_headline', 3000)
         .assert.cssProperty('@sub_headline', 'font-size', '20px')
         .assert.cssProperty('@sub_headline', 'font-family', '"Roboto Slab"')
         .assert.cssProperty('@sub_headline', 'display', 'block');
    },

    'Article kicker CSS': function(){
        article.assert.cssProperty('@article_kicker', 'font-size', '36px')
         .assert.cssProperty('@article_kicker', 'font-family', 'Roboto')
         .assert.cssProperty('@article_kicker', 'display', 'inline')
         .assert.cssProperty('@article_kicker', 'font-weight', 'bold');
    },

    'Meta (author & date) CSS': function(){
        article.assert.cssProperty('@article_author', 'font-size', '15px')
         .assert.cssProperty('@article_author', 'font-family', '"Roboto Slab"')
         .assert.cssProperty('@article_author', 'text-transform', 'uppercase')
         .assert.cssProperty('@article_author', 'font-weight', 'bold')

         .assert.cssProperty('@article_pub_date', 'font-size', '15px')
         .assert.cssProperty('@article_pub_date', 'font-family', '"Roboto Slab"')
         .assert.cssProperty('@article_pub_date', 'color', 'rgba(106, 106, 112, 1)');
    },

    'Share & comment CSS': function(){
        article.assert.cssProperty('@article_social', 'font-family', '"Roboto Slab"')
         .assert.cssProperty('@article_social', 'display', 'block')
         .assert.cssProperty('@article_social', 'height', '70px');
         //add "element contains"" fb, twitter, comment count
    },

    'Article main content CSS': function(){
        article.assert.cssProperty('@article_content', 'font-size', '16px')
         .assert.cssProperty('@article_content', 'font-family', 'Roboto')
         .assert.cssProperty('@article_content', 'display', 'block')
         .assert.cssProperty('@article_content_intro', 'font-weight', 'bold');
    },

    'The Sun Facebook box CSS': function(browser){
        article.waitForElementVisible('@article_fb_page_button', 3000)
         .assert.cssProperty('@article_fb_page_button', 'position', 'relative')
         .assert.cssProperty('@article_fb_page_button', 'display', 'inline-block');

        browser.end();
    }
}