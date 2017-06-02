
var SCROLL_MODULE = (function(){

	var total = 0;
	var newPosition = 0;
	var increment = 1;

	var scroll = function() {

	$(window).on('scroll', function() {

		total += increment;
		var position = window.scrollY;

		console.log(total);

		if (position < newPosition) {

			newPosition = position;
			console.log("you are scrolling UP");

		} else {

			newPosition = position;
			console.log("you are scrolling DOWN");
		}

		});

		var getScroll = function(){

			return scroll();
		};

		return {

			getScroll: getScroll

		};

	}();
	// body...
}());
