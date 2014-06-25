var quotes = {
  todd: {
    source: 'A quote from Todd Halfpenny, an attendee at our last workshop:',
    text: "I was very pleased with what I got from the workshop and wish both Jack and Ollie well with any future events they hold.",
    url: "http://toddhalfpenny.com/2014/06/22/do-less-js-tooling-workshop/",
    readMore: "To read Todd's entire blogpost on the workshop, click here."
  },
  stu: {
    source: 'A quote from Stu Robson, an attendee at our last workshop:',
    text: "The Do Less workshop I attended was informative and a fun experience. Hands on exercises allowed me to make mistakes, ask questions and play, learning at a relaxed pace with great instructors at a very reasonable price.",
  }
};

var changeQuote = function() {
  var quoteHolder = $(".quote");
  var currentQuote = quoteHolder.data("name") || "todd";
  var nextQuote = currentQuote === "todd" ? "stu" : "todd";

  quoteHolder.fadeOut(function() {
    $(".qi-source").text(quotes[nextQuote].source);
    $(".qi-quote").text(quotes[nextQuote].text);

    if(quotes[nextQuote].url) {
      $(".qi-link").children("a")
        .attr("href", quotes[nextQuote].url)
        .text(quotes[nextQuote].readMore).show();
    } else {
      $(".qi-link").children("a").hide();
    }

    quoteHolder.data("name", nextQuote);

    quoteHolder.fadeIn(function() {
      setTimeout(changeQuote, 20000);
    });

  });

};

$(function() {
  setTimeout(changeQuote, 20000);
});
