var quotes = [
  ["Laozi","The Tao that can be expressed is not the eternal Tao; The name that can be defined is not the unchanging name.",],
  ["Yogi Berra","If people don't want to come to the ballpark how are you going to stop them?"],
  ["Winnie the Pooh","Did you ever stop to think, and forget to start again?"],
  ["Confucius","Wherever you go, there you are."],
  ["Jules Winnfield","Hamburgers: the cornerstone of any nutritious breakfast."],
  ["Marshall McLuhan","The medium is the message."],
  ["John Boyd","You gotta challenge all assumptions. If you don't, what is doctrine on day one becomes dogma forever after."]
]



$(document).ready(function() {
  $('#target').on('click', function () {
    $('#Content').empty();
    var index = Math.floor(Math.random()*quotes.length);
    var word = '<h1>' + quotes[index][1] + '</h1>'+'<h2>'+quotes[index][0]+'</h2>';

    $('#Content').append(word);
  });
});
