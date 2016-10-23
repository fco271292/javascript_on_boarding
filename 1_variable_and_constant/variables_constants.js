function variables_constants(){
	//Seccion de tipos de datos
	var number = 2016;
	var string = "Hola mundo! ";
	var boolean = true;
	var empty;
	var nullable = null;
	var person = {name: "Francisco", lastName: "Reyes", age: 23};
	const PI = 3.1416;
	var listOperativeSystem = ["Linux", "Windows"];

	/*Muestra un mensaje con la informacion de las variables.*/
	alert("Numero: "+number+
		"\n"+"Cadena: "+string+
		"\n"+"Logico: "+boolean+
		"\n"+"No definido: "+empty+
		"\n"+"Nulo: "+nullable+
		"\n"+"Objeto persona: "+person.name+" "+person.lastName+
		"\n"+"Constante PI "+PI+
		"\n"+"Sistemas Operativos "+listOperativeSystem
	);

}