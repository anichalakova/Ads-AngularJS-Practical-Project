function manageFiles(input) {
	var result = {};

	for (var i in input) {
		var tokens = input[i].split(/[ ]+/);
		var filename = tokens[0].trim();		
		var extension = tokens[1].trim();		
		var size = parseFloat(tokens[2]);
		
		
		var totalSize = parseFloat("0");
		
		if (!result[extension]) {
			result[extension] = {};
			result[extension] = {files:[], memory: totalSize}
		}

		result[extension]['files'].push(filename);
			
		result[extension]['memory'] += parseFloat(size);
		

	}

	for (var extension in result) {
		result[extension]['memory'] = result[extension]['memory'].toFixed(2);		
	}	


	result = sortObjectProperties(result);

	for (var extension in result) {
		result[extension]['files'].sort(function (a, b) {
			return a > b ? 1 : -1;
		});		
	}

	function sortObjectProperties(obj) {
		var keysSorted = Object.keys(obj).sort();
		var sortedObj = {};
		for (var i = 0; i < keysSorted.length; i++) {
			var key = keysSorted[i];
			sortedObj[key] = obj[key];
		}
		return sortedObj;
	}
	console.log(JSON.stringify(result));
}

manageFiles(['sentinel .exe 15MB',
'zoomIt .msi 3MB',
'skype .exe 45MB',
'trojanStopper .bat 23MB',
'kindleInstaller .exe 120MB',
'setup .msi 33.4MB',
'winBlock .bat 1MB']);