function functionEvaluateRegularExpression(argument) {
	var regularExpression = /\d/
	var date = new Date()
	var statusEvaluateDate = regularExpression.test(date)
	var regularExpressionPassword = /^(\w)+\@((\w)+\.)+(\w{1,3})+$/
	var email = "fco@email.com"
	var statusEvaluatePassword = regularExpressionPassword.test(email)
	alert(`Evaluar expresion regular ${date}: ${statusEvaluateDate}
			Evaluar email ${email}: ${statusEvaluatePassword}
		`)
}