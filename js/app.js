$(document).ready(function() {
	//User can press 'enter' to submit a number
	function submitNumber() {
	$('input#new-number').keydown(function(e) {
		if (e.keyCode == 13) {
				fizzBuzz();
				tryAgain();
		}
	});
	}
	submitNumber();

	//Argument is evaluated into FizzBuzz game
	function fizzBuzz() {
	var userInput = $('input#new-number').val();
	for(count = 1; count <= userInput; count++) {
		if ((count % 3) + (count % 5) == 0) {
			$('#main').append("FizzBuzz <br>");
		}
		else if (count % 3 == 0) {
			$('#main').append("Fizz <br>");
		}
		else if (count % 5 == 0) {
			$('#main').append("Buzz <br>");
		}
		else {
			$('#main').append(count + "<br>");
		}
	}
}
	//Alerts user if they are not submitting a number
		function tryAgain() {
		var userInput = $('input#new-number').val();
		if (isNaN(userInput)) {
			alert("Please enter a number.");
		}
		else if (userInput % 1 !== 0) {
			alert("Please enter a non-decimal number.");
		}
	}
});