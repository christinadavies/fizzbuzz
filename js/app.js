$(document).ready(function() {
	for(count = 0; count <= 100; count++) {
		if ((count % 3) + (count % 5) == 0) {
			$('.main').append("FizzBuzz <br>");
		}
		else if (count % 3 == 0) {
			$('.main').append("Fizz <br>");
		}
		else if (count % 5 == 0) {
			$('.main').append("Buzz <br>");
		}
		else {
			$('.main').append(count + "<br>")
		}
	}
});