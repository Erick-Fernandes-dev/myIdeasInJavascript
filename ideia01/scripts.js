let name = "Erick";
let age = 19;
let numberPar = 0;

if (age >= 19){

	for(let i = 0; i < 20; i++){

		if(age % i == 0){

			console.log("in my name, exist numbers par " + i);
			numberPar++;
		}
		
	}
	console.log("Number pars in my name: " + numberPar);
}