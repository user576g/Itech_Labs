var rows;

function getMedianTemperatureFromRow(rowNumber) {
	var cells = rows[rowNumber].getElementsByTagName('td');
	var str_t = cells[7].innerHTML;
	return parseFloat(str_t);
}

function min_max() {    
	var table = document.getElementsByTagName('table');
	rows = table[0].querySelectorAll("tr");
	var min = getMedianTemperatureFromRow(1);
	var max = getMedianTemperatureFromRow(1);
	var min_index = 1;
	var max_index = 1;
	var n = rows.length - 1;
	for (var i = 2; i < n; ++i) {
		var temperature = getMedianTemperatureFromRow(i);
		if (isNaN(temperature)) {
			continue;
		} else {
			if (temperature < min) {
				min = temperature;
				min_index = i;
			} else if (max < temperature) {
				max = temperature;
				max_index = i;

			}
		}
	}
	
	var cells = rows[min_index].getElementsByTagName('td');
	var minDay = cells[2].innerHTML;

	cells = rows[max_index].getElementsByTagName('td');
	var maxDay = cells[2].innerHTML;

	alert('Самым холодным днём был: ' + minDay 
		+ '. Тогда была температура: ' + min
		+ '\nСамым жарким днём был: ' + maxDay 
		+ '. Тогда была температура: ' + max);
}

min_max();
