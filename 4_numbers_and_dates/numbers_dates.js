function functionTypeOfNumbers() {
	var decimal = 15
	var binary = 0b1111
	var octal = 017
	var hexadecimal = 0xF
	alert(`Decimal ${decimal} \n Binario ${binary} \n Octal ${octal} \n Hexadecimal ${hexadecimal}`)
}

function functionObjectNumber() {
	var biggestNum = Number.MAX_VALUE
	var infiniteNum = Number.POSITIVE_INFINITY
	var notANum = Number.NaN
	alert(`Numero maxino ${biggestNum} \n Numero infinito ${infiniteNum} \n No es numero ${notANum}`)
}

function functionGenarateRandom(argument) {
	var numberRandom = Math.random() * 100
	console.log(Math.ceil(numberRandom))
	console.log(Math.floor(numberRandom))
	alert(`Numero aleatorio ${Math.floor(numberRandom)}`)
}

function functionObjectDate(argument) {
	//Formato de fecha new Date(año,mes,dia,hora,minuto,segundo)
	//Ademas se debe restar uno al mes para que tome el correcto
	var date = new Date(2016,10,06,23,30,00)
	var detailDate = {day: date.getDate(), month: date.getMonth(), year:date.getFullYear()}
	var today = new Date()
	alert(`Fecha: ${date} \n 
		Dia ${detailDate.day}, Mes: ${detailDate.month+1}, Año: ${detailDate.year} \n
		Fecha en milisegundo: ${today.getTime()}
		Fecha formateada: ${today.toDateString()}
		`)
}