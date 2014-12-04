

function tipCalc(meal, tax, tip){
	
	//My first attempt to pass through values (failed, of course - passed elements instead)

	/*
	var meal = document.getElementById("meal");
	var tax = document.getElementById("tax");
	var tip = document.getElementById("tip");
	*/

	//Why doesn't input from type number automatically work as a number?
	//Number type is HTML 5 only?
	//Converting to numbers:

	m = meal * 1;
	t = tax * 1;
	tp = tip * 1;

	console.log("Meal is "+m+", Tax rate is "+t+", and Tip rate is "+tp);

	var total = (m + m*(t/100) + m*(tp/100));

	console.log("Total cost is: "+total);

	document.getElementById("breakdown").innerHTML = 
		"Base: $"+m+"<br>"
		+"Tax: $"+m*t/100+"<br>"
		+"Tip: $"+m*tp/100;

	document.getElementById("tot_amt").innerHTML = "The total cost of your meal is: $"+total;
}