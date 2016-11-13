function showArray(){
	var list = populateArray()
	alert(`Lista de valores ${list}`)
}

function populateArray(){
	var list = []
	var numberRandom = 0
	for (var iteration = 1;iteration <= 5; iteration++){
		numberRandom = Math.floor(Math.random()*100)
		list[iteration] = numberRandom
	}
	return list
}

function iterationArray(){
	var array = populateArray()
	array.forEach(function(item){
		console.log(`Elemento ${item}`)
	})
}

function defaultMethodsArray(){
	var array = populateArray()
	alert(`Longitud arreglo ${array.length}
	\n Unir elementos en una cadena ${array.join("_")}
	\n Agregar elemento ${array.push(2016)}
	\n Eliminar elemento ${array.pop()}
	\n Ordena elementos ${array.sort()}
	\n Inverso de elementos ${array.reverse()}
	\n Nueva lista iterando cada valor ${array.map(function(item){console.log(item*1000)})}
	\n Filtro sobre lista ${array.filter(function(item){if(item%2==0){console.log("Numero par "+item)}})}
	`)
}
