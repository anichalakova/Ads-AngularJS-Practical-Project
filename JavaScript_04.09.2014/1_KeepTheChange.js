function calculateTip(input) {
	var bill = input[0];	
	var mood = input[1];
	var tip = 0;
	switch (mood) {
		case 'happy': tip = 0.1 * bill; break;
		case 'married': tip = 0.0005 * bill; break;
		case 'drunk':
			tip = 0.15 * bill;
			var tipString = '' + tip;
			var firstDigit = tipString.split('')[0];
			var tip = Math.pow(tip, firstDigit);
			break;
		default: tip = 0.05 * bill; break;
	}
	console.log(tip.toFixed(2));
}
calculateTip([0, 'drunk']);
calculateTip([1230.83, 'drunk']);
calculateTip([100.00, 'married']);