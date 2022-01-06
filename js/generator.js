let button = document.getElementById('generateButton');
let raza_h3 = document.getElementById('raza_h3');
let clase_h3 = document.getElementById('clase_h3');
let addHabBasica = document.getElementById('añadir_hab_basica');
let addHabArt = document.getElementById('añadir_hab_art');
let addHabmontar = document.getElementById('añadir_hab_montar');
let addSaber = document.getElementById('addSaber');
let addSaberTeo = document.getElementById('addSaberTeo');
let addSaberArc = document.getElementById('addSaberArc');
button.onclick = function () {
	generateAtributes()
	generateCharacteristics()
}

addHabBasica.onclick = function () {
	$("#habTbl").find('tbody').append(`<tr><td><input type="text"</td><td><input type="text"</td><td><input type="text"</td></td></tr>`);
	console.log("test");
}
addHabArt.onclick = function () {
	$("#habArTbl").find('tbody').append(`<tr><td><input type="text"</td><td><input type="text"</td><td><input type="text"</td></td></tr>`);
	console.log("test");
}
addHabmontar.onclick = function () {
	$("#habMonTbl").find('tbody').append(`<tr><td><input type="text"</td><td><input type="text"</td><td><input type="text"</td></td></tr>`);
	console.log("test");
}
addSaber.onclick = function () {
	$("#saberesTbl").find('tbody').append(`<tr><td><input type="text"</td><td><input type="text"</td><td><input type="text"</td></td></tr>`);
	console.log("test");
}

addSaberTeo.onclick = function () {
	$("#saberesTeoTbl").find('tbody').append(`<tr><td><input type="text"</td><td><input type="text"</td><td><input type="text"</td></td></tr>`);
	console.log("test");
}
addSaberArc.onclick = function () {
	$("#saberesArcTbl").find('tbody').append(`<tr><td><input type="text"</td><td><input type="text"</td><td><input type="text"</td></td></tr>`);
	console.log("test");
}

let fuerza;
let destreza;
let constitucion;
let inteligencia;
let sabiduria;
let carisma;


/*General*/


character_json = {
	"atributes": {
		"fuerza": 0,
		"destreza": 0,
		"constitucion": 0,
		"inteligencia": 0,
		"sabiduria": 0,
		"carisma": 0,
	},
	"raza": "",
	"clase": "",
	"habilidades": {}



}

/*Habilidades*/
habilidades = {
	"generales":
		["abrir cerraduras", "acrobacias", "custom"],
	"artisticas": {

	},
	"artesania": {

	},
	"montar": {

	},
	"saberes": {

	},
	"saberes teologicos": {

	},
	"saberes arcanos": {

	}
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



/********************/
/******RAZAS*********/
/********************/

racesList = ["Humano", "Elfo", "Enano", "Orco", "Mediano"]
classList = ["guerrero", "rufian", "sacerdote", "mistico", "marcado", "explorador", "monje", "mago de combate", "duelista", "tirador", "bardo", "ninja"]

let race_selector = document.getElementById('racial_selector');
let class_selector = document.getElementById('class_selector');
for (var i = 0; i < racesList.length; i++) {
	let opt = racesList[i];
	let el = document.createElement("option");
	el.textContent = opt;
	el.value = opt;
	race_selector.appendChild(el);
}
for (var i = 0; i < classList.length; i++) {
	let opt = classList[i];
	let el = document.createElement("option");
	el.textContent = opt;
	el.value = opt;
	class_selector.appendChild(el);
}



razas = [{
	"humano": {
		"nombre": "humano",
		"ddg": 8,
		"bonos": {
			"fuerza": 0,
			"destreza": 0,
			"constitucion": 0,
			"inteligencia": 0,
			"sabiduria": 0,
			"carisma": 0,
		},
		"rasgos": {
			"puntos de habilidad": "Durante la creacion de PJ ganas dos puntos de habilidad extra",
			"puntos de habilidad_nivel": "Ganan 1 punto de habilidad extra por nivel"
		}
	}, "elfo": {
		"nombre": "elfo",
		"ddg": 6,
		"bonos": {
			"fuerza": 0,
			"destreza": 2,
			"constitucion": -1,
			"inteligencia": 0,
			"sabiduria": 0,
			"carisma": 0,
		},
		"rasgos": {
			"trance": "Requieren la mitad de tiempo para descansar",
			"Imnumes a enfermedad y paralisis": "",
			"herencia magica": "Los elfos pueden conocer hechizos de nivel 0 o 1 a su eleccion y podrán lanzarlos si el rasgo de Lanzamiento de conjuros"
		}
	},
	"enano": {
		"nombre": "enano",
		"ddg": 10,
		"bonos": {
			"fuerza": 0,
			"destreza": -2,
			"constitucion": 2,
			"inteligencia": 0,
			"sabiduria": 0,
			"carisma": 0,
		},
		"rasgos": {
			"vision en la_penumbra": "vision en la penumbra (10 metros)",
			"resistir frio": "Ventajas en tiradas de constitucion para resistir frio",
			"resistentes sugestion": "ventajas en tiradas para resistor encantamientos e ilusiones"
		}
	},
	"orco": {
		"nombre": "orco",
		"ddg": 8,
		"bonos": {
			"fuerza": 2,
			"destreza": 0,
			"constitucion": 0,
			"inteligencia": 0,
			"sabiduria": 0,
			"carisma": -2,
		},
		"rasgos": {
			"vision en la_penumbra": "vision en la penumbra (10 metros)",
			"Imnune al veneo": "",
			"Ventaja siguiendo rastros": ""
		}
	},
	"mediano": {
		"nombre": "mediano",
		"ddg": 6,
		"bonos": {
			"fuerza": 0,
			"destreza": 1,
			"constitucion": 0,
			"inteligencia": 0,
			"sabiduria": 0,
			"carisma": 0,
		},
		"rasgos": {
			"escurridizo": "ventaja en tiradas de esconderse",
			"Blanco reducido": "Ventaja para esquivar a oponentes mas geandes que un mediano",
			"Menudo": "No puede llevar armas a dos manos",
			"Puro": "No puede ser Marcado o usar magia Caotica, pero tambien tiene ventaja para resistir influencia del caos"
		}
	}
}
]





/*CLASES*/

clases = [{
	"guerrero": {
		"nombre": "guerrero",
		"habilidades": {
			"Habilidad armas 1": "",
			"Habilidad armas 2": "",
			"Habilidad armas 3": "",
			"Artesania": "",
			"Avistar": "",
			"Montar": ""
		},
		//esto iria en funcion del nivel pero de momento solo nivel 1
		"dotes": {
			"Fiereza(pasiva)": "Cada vez que mata a un oponente de un golpe, el guerrero gana un ataque adicional."

		},
		"salario": "fuerza x 3"
	}
}
]


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





/*GENERACION DE ATRIBUTOS*/


function generateAtributes() {
	race = race_selector.value.toLowerCase();
	clase = class_selector.value.toLowerCase();
	character_json["raza"] = razas[0][race_selector.value.toLowerCase()];
	character_json["clase"] = clases[0][class_selector.value.toLowerCase()];
	base = 4;
	jQuery.each(character_json["atributes"], function (i, val) {
		val = getCharac() + base + razas[0][race]["bonos"][i]
		character_json["atributes"][i] = val;

	});
	console.log(character_json)

	raza_h3.innerHTML = "Raza: " + character_json["raza"]["nombre"]
	clase_h3.innerHTML = "Clase: " + character_json["clase"]["nombre"]

	atributes_html = `<h3>Atributos</h3>
	<table id="atributes" class="basic">
		<tr>
			<th>Atributo</th>
			<th>Valor</th>
		</tr>
		<tr>
			<td>Fuerza (FUE)</td>
			<td id="fuerza">
				<input id="fue_input" type="number" value="`+ character_json["atributes"]["fuerza"] + `" >

			</td >
			<td>
			<button id="swapFUE_DES" >-</button>
			</td>
		</tr >
		<tr>
			<td>Destreza (DES)</td>
			<td id="destreza">
			<input id="des_input" type="number" value="`+ character_json["atributes"]["destreza"] + `" >
			</td>
			<td>
			<button id="swapDES_CON" >-</button>
						</td>
		</tr>
		<tr>
			<td>Constitucion (CON)</td>
			<td id="constitucion">
			<input id="con_input" type="number" value="`+ character_json["atributes"]["constitucion"] + `" >
			</td>
						<td>
			<button id="swapCON_INT" >-</button>
						</td>
		</tr>
		<tr>
			<td>Inteligencia (INT)</td>
			<td>
			<input id="int_input" type="number" value="`+ character_json["atributes"]["inteligencia"] + `" ></td>
		
					<td>
		<button id="swapINT_SAB" >-</button>
					</td>
		<tr>
			<td>Sabiduria (SAB)</td>
			<td id="sabiduria">
					<input id="sab_input" type="number" value="`+ character_json["atributes"]["sabiduria"] + `" >
			</td>
						<td>
			<button id="swapSAB_CAR" >-</button>
						</td>
		</tr>
		<tr>
			<td>Carisma (CAR)</td>
			<td id="carisma">
					<input id="car_input" type="number" value="`+ character_json["atributes"]["carisma"] + `" >
			</td>
						<td>
			<button id="swapCAR_FUE" >-</button>
						</td>
		</tr>
		</table > `

	document.getElementById("atributtes_div").innerHTML = atributes_html;
	let swapFUE_DES_btn = document.getElementById('swapFUE_DES');
	let swapDES_CON_btn = document.getElementById('swapDES_CON');
	let swapCON_INT_btn = document.getElementById('swapCON_INT');
	let swapINT_SAB_btn = document.getElementById('swapINT_SAB');
	let swapSAB_CAR_btn = document.getElementById('swapSAB_CAR');
	let swapCAR_FUE_btn = document.getElementById('swapCAR_FUE');

	swapFUE_DES_btn.onclick = function () {
		v1 = document.getElementById("fue_input").value
		v2 = document.getElementById("des_input").value

		document.getElementById("fue_input").value = v2
		document.getElementById("des_input").value = v1
	}
	swapDES_CON_btn.onclick = function () {
		v1 = document.getElementById("des_input").value
		v2 = document.getElementById("con_input").value

		document.getElementById("des_input").value = v2
		document.getElementById("con_input").value = v1
	}
	swapCON_INT_btn.onclick = function () {
		v1 = document.getElementById("con_input").value
		v2 = document.getElementById("int_input").value

		document.getElementById("con_input").value = v2
		document.getElementById("int_input").value = v1
	}
	swapINT_SAB_btn.onclick = function () {
		v1 = document.getElementById("int_input").value
		v2 = document.getElementById("sab_input").value

		document.getElementById("int_input").value = v2
		document.getElementById("sab_input").value = v1
	}
	swapSAB_CAR_btn.onclick = function () {
		v1 = document.getElementById("sab_input").value
		v2 = document.getElementById("car_input").value

		document.getElementById("sab_input").value = v2
		document.getElementById("car_input").value = v1
	}
	swapCAR_FUE_btn.onclick = function () {
		v1 = document.getElementById("car_input").value
		v2 = document.getElementById("fue_input").value

		document.getElementById("car_input").value = v2
		document.getElementById("fue_input").value = v1
	}
}

function generateCharacteristics() {

	let puntos_de_golpe = character_json["raza"]["ddg"] + character_json["atributes"]["constitucion"]
	console.log(puntos_de_golpe);
	//let energia = character_json["nivel"]
	//console.log(energia);


	caracteristias_html = `<h3>Caracteristicas</h3>

	<table class="basic">
		<tr>
			<th>Caracteristica</th>
			<th>Valor</th>
		</tr>
		<tr>
			<td  >Puntos de golpe</td>
			<td id="puntos_de_golpe">`+ puntos_de_golpe + `</td>
		</tr>
		<tr>
			<td>Energia</td>
			<td id="energia">`+ 1 + `</td>
		</tr>
		<tr>
			<td>Movimiento</td>
			<td id="movimiento">`+ 1 + `</td>
		</tr>
		<tr>
			<td>Salud mental</td>
			<td id="salud_mental">`+ 1 + `</td>
		</tr>
	</table>`

	document.getElementById("chars_div").innerHTML = caracteristias_html;

}