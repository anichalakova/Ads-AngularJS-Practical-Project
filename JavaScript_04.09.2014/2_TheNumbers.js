function dessifferNumbers(input) {
	var numbers = input[0].split(/\D+/);

	function cleanArray(array, deleteValue) {
		for (var i = 0; i < array.length; i++) {
			if (array[i] == deleteValue) {         
				array.splice(i, 1);
				i--;
			}
		}
		return array;
	}

	function convertDecToHex(numberString) {
		var number = parseInt(numberString);
		var numberString = number.toString(16);
		return numberString.toUpperCase();
	}

	function pad(number) {
		while (number.length < 4) number = '0' + number;
		number = '0x' + number;
		return number;
	}
	
	cleanArray(numbers, '');
	var result = [];
	for (var i = 0; i < numbers.length; i++) {		
		numbers[i] = convertDecToHex(numbers[i]);		
		numbers[i] = pad(numbers[i]);
		result.push(numbers[i]);		
	}

	console.log(result.join('-'));	
}
dessifferNumbers('482vMWo(*&^%$213;k!@41341((()&^>><///]42344p;e312');