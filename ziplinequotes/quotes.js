var quotes = [
  ["Laozi","The Tao that can be expressed is not the eternal Tao; The name that can be defined is not the unchanging name.",],
  ["Yogi Berra","If people don't want to come to the ballpark how are you going to stop them?"],
  ["Winnie the Pooh","Did you ever stop to think, and forget to start again?"],
  ["Confucius","Wherever you go, there you are."],
  ["Jules Winnfield","Hamburgers: the cornerstone of any nutritious breakfast."],
  ["Marshall McLuhan","The medium is the message."],
  ["John Boyd","You gotta challenge all assumptions. If you don't, what is doctrine on day one becomes dogma forever after."]
]
function clean(quote) {
  var re = /;/gi
  var newstr = quote.replace(re,"%3B");
  return newstr;
}




$(document).ready(function() {
  var index = Math.floor(Math.random()*quotes.length);
  var word = '<h2>' + quotes[index][1] + '</h2>'+'<h3>'+quotes[index][0]+'</h3>';
  $('#Content').append(word);
  $('#target').on('click', function () {
    $('#Content').empty();
    index = Math.floor(Math.random()*quotes.length);
    word = '<h2>' + quotes[index][1] + '</h2>'+'<h3>'+quotes[index][0]+'</h3>';

    $('#Content').append(word);
  });
  $('#tweet').click(function(event) {
    this.href = "http://twitter.com/share?" + "text=" + clean(quotes[index][1]) + '   - ' + quotes[index][0];
    var width  = 575,
        height = 400,
        left   = ($(window).width()  - width)  / 2,
        top    = ($(window).height() - height) / 2,
        url    = this.href,
        opts   = 'status=1' +
                 ',width='  + width  +
                 ',height=' + height +
                 ',top='    + top    +
                 ',left='   + left;

    window.open(url, 'twitter', opts);

    return false;
  });
});
