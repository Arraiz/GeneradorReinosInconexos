let button = document.getElementById('generateButton');
button.onclick = function () {
	generateAtributes()
}

let fuerza;
let destreza;
let constitucion;
let inteligencia;
let sabiduria;
let carisma;


/*General*/
atributes_json = {
	"fuerza": 0,
	"destreza": 0,
	"constitucion": 0,
	"inteligencia": 0,
	"sabiduria": 0,
	"carisma": 0
}


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

	// Checking for values[1]
	if ((values[0] < values[1] && values[1] < values[2]) || (values[2] < values[1] && values[1] < values[0]))
		return values[1];

	// Checking for values[0]
	else if ((values[1] < values[0] && values[0] < values[2]) || (values[2] < values[0] && values[0] < values[1]))
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


function generateAtributes() {

	base = 4;
	jQuery.each(atributes_json, function (i, val) {
		val = getCharac() + base;
		atributes_json[i] = val
		console.log(atributes_json[i])
		console.log(i + " " + val)
	});
	atributes_html = `<h3>Atributos</h3>
	<table id="atributes" class="basic">
		<tr>
			<th>Atributo</th>
			<th>Valor</th>
		</tr>
		<tr>
			<td>Fuerza (FUE)</td>
			<td id="fuerza">
				<input type="number" value="`+ atributes_json["fuerza"] + `" >

			</td >
		</tr >
		<tr>
			<td>Destreza (DES)</td>
			<td id="destreza">
					<input type="number" value="`+ atributes_json["destreza"] + `" >
			</td>
		</tr>
		<tr>
			<td>Constitucion (CON)</td>
			<td id="constitucion">
					<input type="number" value="`+ atributes_json["constitucion"] + `" >
			</td>
		</tr>
		<tr>
			<td>Inteligencia (INT)</td>
			<td id="inteligencia">	
				<input type="number" value="`+ atributes_json["inteligencia"] + `" ></td>
		</tr>
		<tr>
			<td>Sabiduria (SAB)</td>
			<td id="sabiduria">
					<input type="number" value="`+ atributes_json["sabiduria"] + `" >
			</td>
		</tr>
		<tr>
			<td>Carisma (CAR)</td>
			<td id="carisma">
					<input type="number" value="`+ atributes_json["carisma"] + `" >
			</td>
		</tr>
		</table > `
	document.getElementById("atributtes_div").innerHTML = atributes_html;
}

/*Guerrero*/

tblHabilidades = `</table >
		<table id="tblHabiWArrior" class="basic">
		<tr>
			<th>Habilidad</th>
			<th>Nivel</th>
		</tr>
		<tr>
			<th>Habiliad arma 1</th>
			<th>**</th>
		</tr>
		<tr>
		<th>Habiliad arma 2</th>
			<th>**</th>
		</tr>
		<tr>
		<th>Habiliad arma 3</th>
			<th>**</th>
		</tr>
		<tr>
			<td>Artesania</td>
			<td>**</td>
		</tr>
		<tr>
			<td>Avistar</td>
			<td>**</td>
		</tr>
		<tr>
			<td>Montar</td>
			<td>**</td>
		</tr>
		<tr>
			<td>Carisma</td>
			<td>**</td>
		</tr>
		</table>
		<table class="basic">
			<th>Dote</th>
			<th>Nivel</th>
		<tr>
			<th>Protegido hasta los dientes</th>
			<th>**</th>
		</tr>
		<tr>
		<th>Resistente</th>
			<th>**</th>
		</tr>
		<tr>
		<th>Fiereza</th>
			<th>**</th>
		</tr>
		<tr>
			<td>Ataque poderoso</td>
			<td>**</td>
		</tr>
		<tr>
			<td>Barrido</td>
			<td>**</td>
		</tr>
	</table>`


