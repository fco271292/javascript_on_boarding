function add(numer1,numer2){
	var result = numer1+numer2
	alert("Suma de valores "+numer1+" + "+numer2+" = "+result)
}

var subtract = function (numer1,numer2) {
	var result = numer1-numer2
	alert(`Resta de valores ${numer1} - ${numer2} = ${result}`)
}

function divide(numer1,numer2) {
	numer2 = !isNaN(numer2) ? numer2 : 1
	var result = numer1 / numer2
	alert(`Division de valores ${numer1} / ${numer2} = ${result}`)
}

var closure = function(name) {
	console.log(`closure ${name}`)
	return{
		getName : function () {
			console.log(`Obtener nombre ${name}`)
			name = typeof name != "undefined" ? name : "Bot"
			return name
		}
	}
}

function functionDefaultJS(argument) {
	var numberInfinite = Number.POSITIVE_INFINITY
	var noIsNumber = "Uno"
	var number = 3.1416
	var character = "JS"
	alert(`Evaluar numero finito ${numberInfinite}... ${isFinite(numberInfinite)}
		\n Evaluar si es un numero ${noIsNumber}... ${isNaN(noIsNumber)}
		\n Numero como cadena: ${number}, Numero entero: ${parseInt(number)}, Numero flotante: ${parseFloat(number)}
		\n Caracter ${character}, Numero: ${Number(character)}, Cadena: ${String(character)}
		`)
}