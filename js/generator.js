let button = document.getElementById('generateButton');
button.onclick = function () {
	generateCharacts()
}

/*General*/
characteristics = ["Fuerza", "Destreza", "Constitucion", "Inteligencia", "Sabiduria", "Carisma"];

let d8 = {
	sides: 8,
	roll: function () {
		var randomNumber = Math.floor(Math.random() * this.sides) + 1;
		return randomNumber;
	}
}

let d6 = {
	sides: 6,
	roll: function () {
		var randomNumber = Math.floor(Math.random() * this.sides) + 1;
		return randomNumber;
	}
}

function medianof2Arr(values) {

	// Checking for b
	if ((values[0] < values[1] && values[1] < values[2]) || (values[2] < values[1] && values[1] < values[0]))
		return values[1];

	// Checking for a
	else if ((values[1] < values[0] && values[0] < values[1]) || (values[2] < values[0] && values[0] < values[1]))
		return values[0];

	else
		return values[2];

}

function getCharac() {
	let charac;
	rolls = [d8.roll(), d8.roll(), d8.roll()]
	console.log(rolls)

	charac = medianof2Arr(rolls)

	return charac;
}


function generateCharacts() {

	characteristics.forEach(ch => {
		document.getElementById(ch).innerHTML = getCharac() + 4;
	});


}

/*Guerrero*/

