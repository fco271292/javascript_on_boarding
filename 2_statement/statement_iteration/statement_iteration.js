function conditionalFor(){
	var msn = "Valores "
	for(var iterator=1;iterator<=10;iterator++){
		msn += " "+iterator
	} 
	alert("Ciclo for \n"+msn)
}

function conditionalDoWhile(){
	var iterator = 1
	var msn = "Valores "
	do{
		msn += " "+iterator
		iterator += 1
	} while(iterator<=10)
	alert("Ciclo do...while \n"+msn)
}

function conditionalWhile(){
	var iterator = 1
	var msn = "Valores "
	while(iterator<=10){
		msn += " "+iterator
		iterator += 1
	} 
	alert("Ciclo while \n"+msn)
}

function conditionalForIn() {
	var person = {name:"Francisco", lastName:"Reyes", age:23}
	for(var property in person){
		alert("Objeto persona\n "+property+": "+person[property])
	}
}

function conditionalForOf() {
	var daysWeek = ["Lunes","Martes","Miercoles","Jueves","Viernes"]
	for(var day of daysWeek){
		alert("Dia de la semana: \n "+day)
	}
}