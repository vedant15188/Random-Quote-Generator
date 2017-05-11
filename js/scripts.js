/**
 * Created by VEDANT KASHYAP on 5/11/2017.
 */

var BaseURL = "https://twitter.com/intent/tweet?text=";

/*
 This function builds up your text to tweet by trimming extra spaces from the quote and the author.
 */

function tweetText() {
    $("a[href^='https://twitter.com/intent/tweet?text=']").prop("href", BaseURL + $("#quote").text().trim() + "%0D%0A" + $("#author-container").text().trim());
}

/*
 This function gets the JSON from https://quotesondesign.com/api-v4-0/ and injects it into the div containers as a quote and it's author
 */

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