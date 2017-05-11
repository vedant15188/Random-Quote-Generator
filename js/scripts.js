/**
 * Created by VEDANT KASHYAP on 5/11/2017.
 */

var BaseURL = "https://twitter.com/intent/tweet?text=";

function tweetText() {
    $("a[href^='https://twitter.com/intent/tweet?text=']").prop("href", BaseURL + $("#quote").text().trim() + "%0D%0A" + $("#author-container").text().trim());
}

function getNewQuote() {
    $("#quote").fadeOut(500, function () {
        $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=?",
            function (getQuote) {
                $("#quote").html(getQuote[0].content);
                $("#author-container").text("- " + getQuote[0].title);
                $("#quote").fadeIn(700);
                $("#author-container").fadeIn(700);
                tweetText();
            })
    })
}