function functionGenerateMapAlphabet(argument) {
	
	var alphabet = new Map()
	var character = ""
	var msn = ""

	for (var unicode = 97; unicode <= 122; unicode++) {
		character = `${String.fromCharCode(unicode).toUpperCase()} `
		alphabet.set(unicode,character)
	}

	//Sobreescribe el valor si existe la llave
	//alphabet.set(97,new Date())
	
	for (var [key, value] of alphabet) {
		msn += `${key}: ${value}, `
		console.log(`Numero unicode: ${key}, Caracter: ${value}`)
	}

	alert(`Mapa: ${msn}
		\n Tamaño del mapa: ${alphabet.size}
		\n Obtener un elemento del mapa: ${alphabet.get(97)}
		\n Eliminar un elemento: ${alphabet.delete(97)}

		`)

}

function functionGenerateSetAlphanumericCharacters(argument) {

	var alphanumericCharacters = new Set()
	var msn = ""
	for (var unicode = 32; unicode <= 64; unicode++) {
		//Convierte el valor unicode a caracter
		alphanumericCharacters.add(String.fromCharCode(unicode))
	}

	//No permite agregar un valor que ya existe
	//alphanumericCharacters.add(String.fromCharCode(65))

	for (let item of alphanumericCharacters){
		msn += `${item} `
		console.log(item)
	}

	alert(`Set: ${msn}
		\n Tamaño del set: ${alphanumericCharacters.size}
		\n Saber si existe un elemento: ${alphanumericCharacters.has("@")}
		\n Eliminar un elemento: ${alphanumericCharacters.delete("@")}`)
}

function functionConvertSetToArray(argument) {

	var list = []
	var set = new Set()

	for (var unicode = 32; unicode <= 64; unicode++) {
		set.add(String.fromCharCode(unicode))
	}

	list = Array.from(set)
	list.forEach(function(item){
		//Regresa el valor unicode dado un indice
		console.log(`${item.charCodeAt(0)}`)
	})

}