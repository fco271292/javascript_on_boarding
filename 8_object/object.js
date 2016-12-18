function Person(name,lastName,birthDate) {
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

function addPropertyPerson(argument) {
	Person.prototype.gender=""
}

function createPerson(name,lastName,birthDate,gender) {
	var person = new Person(name,lastName,birthDate)
	person.gender=gender
	console.log(`Nuevo atributo genero: ${person.gender}`)
}

function Car(trademark,model,year){
	var car = {
		marca : trademark,
		modelo : model,
		anio : year,
		antiguedad : 0,
		//Se agrega setter para la antiguedad
		set setYears(anio) { 
			var now = new Date()
			var currentYear = now.toJSON().slice(0,4)
			this.antiguedad = new Number(currentYear) - new Number(anio)
			//console.log(`Antiguedad: ${this.antiguedad}`)
		},
		//Se agrega getter para la antiguedad
		get getYears() {
			return this.antiguedad
		}
	}
	car.setYears = year
	console.log(`Carro \n Marca: ${car.marca}, Modelo: ${car.modelo}, Año: ${car.anio}, Antiguedad: ${car.getYears}`)
}

function deletePropertyPerson(name,lastName,birthDate) {
	var person = new Person(name,lastName,birthDate)
	delete person.gender
	//Verifica que exista la propiedad genero en objeto persona 
	console.log(`Existe propiedad genero en persona ${ person.gender ? "Existe" : "No existe" }`)
}

function compareObjects(argument) {
	var number = 1
	var string = "1"
	console.log(`Operador de igualdad, compara valor: ${number == string}`)
	console.log(`Operador estrictamente igual, compara valor y tipo: ${number === string}`)
}