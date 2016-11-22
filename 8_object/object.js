function functionCreatePerson(name,lastName,birthDate) {
	var person = {
		name:name,
		lastName:lastName,
		birthDate:birthDate,
		age: function () {
			//Indice inicial y final
			var dayBirthDate = birthDate.substring(0,2)
			//Indice inicial hasta la cantidad de caracteres 
			var monthBirthDate = birthDate.substr(3,2)
			//Regresa una nueva cadena
			var yearBirthDate = birthDate.slice(6)
			//Convierte la fecha actual en formato JSON
			var today = new Date().toJSON()
			//Obtiene de la fecha actual en JSON el año
			var currentYear = today.slice(0,4)
			//Calcula la edad
			return currentYear - yearBirthDate

		}
	}
	console.log(`Nombre ${person.name}, Apellido ${person.lastName}, Fecha de nacimiento ${person.birthDate}, Edad ${person.age()}`)
}