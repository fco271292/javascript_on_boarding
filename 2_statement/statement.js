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