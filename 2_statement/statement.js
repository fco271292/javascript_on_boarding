function conditionalIfElse(){

	var age = 18;

	if(age >= 18){
		alert("Mayor de edad!");
	}
	else{
		alert("Menor de edad!");
	}
	
}

function conditionalSwitch(){

	var color = 255;

	switch(color){
		case 255:
			alert("Color blanco");
		break;
		case 0:
			alert("Color negro");
		break;
		default:
			alert("No se encontro!");
		break;
	}

}

function launchException(){
	throw "Internal Server Error: 500!"; 
}

function manageTryCatch(){

	var numberString = "diez";
	var numberInt = 10;

	try{
		alert(convertStringToNumber(numberString))
	}
	catch(error){
		alert("Error: "+error)
	}
	finally{
		console.log("Finalizo.")
	}
	
}

function convertStringToNumber(number){

	if(!isNaN(number)){
		return parseInt(number);
	}
	else{
		throw "No se puede convertir el dato";
	}

}