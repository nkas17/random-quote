
// Shorthand for $( document ).ready()
$(function() {
	console.log( "loading quotes!" );
	getQuote();

 $('#next-quote').on('click', function(e) {
	e.preventDefault();
	getQuote();
});


 $('#tweet-quote').on('click', function() {
	 window.open('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
});

});

var currentQuote = "";
var currentAuthor = "";

function getQuote() {
$.ajax( {
		url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=1',
		headers: {
			"X-Mashape-Key": "Zlim1IqWiUmsh012QAAHVeT9P1yMp1LXPNEjsnvLrkzvhRQSEO",
			"Accept": "application/json"
		},
	
		success: function(data) {
			currentQuote = data[0].quote;
			currentAuthor = data[0].author;
			$('.quote-author').text('~ '+currentAuthor+' ~');
			$('.quote-content').html('"'+currentQuote+'"');

		},
		cache: false
	});
}
