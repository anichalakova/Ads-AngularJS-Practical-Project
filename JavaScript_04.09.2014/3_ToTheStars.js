function calculateLocation(input) {
	var stars = [];
	stars[0] = input[0].split(' ');
	stars[1] = input[1].split(' ');
	stars[2] = input[2].split(' ');
	stars.sort(function(a, b) { 
		return parseFloat(a[2]) > parseFloat(b[2]) ? 1 : -1;
	});
	
	var normandy = input[3].split(' ');
	var normandyX = parseFloat(normandy[0]);
	var normandyY = parseFloat(normandy[1]);
	var turns = input[4];

	for (var t = 0; t <= turns; t++) {
		var location = 'space';
		for (var s= 0; s < 3; s++) {
			compareLocations(stars[s]);
		}
		console.log(location.toLowerCase());		
		normandyY = normandyY + 1;		
	}

	function compareLocations(star) {
		if ((equalX(star)) && (equalY(star))) {
			location = star[0];
		} 
	}

	function equalX(star) {
		if ((normandyX >= (parseFloat(star[1]) - 1)) && ((normandyX <= (parseFloat(star[1]) + 1)))) {			
			return true;			
		} else {
			return false;
		}
	}

	function equalY(star) {
		if ((normandyY >= (parseFloat(star[2]) - 1)) && ((normandyY <= (parseFloat(star[2]) + 1)))) {			
			return true;			
		} else {
			return false;
		}
	}
}

calculateLocation(['Sirius 7 3',
'Alpha-Centauri 7 5',
'Gamma-Cygni 10 10',
'8 1',
'6']);