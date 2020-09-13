let number = (b, h) => {
	let triangle = b * h / 2
	console.log(triangle);
}

number(4, 9);

let expressão = (a, b, c) => {
	return a + b + c / 3
}

console.log(expressão(4, 6, 8))

function idPeaple(name, age, height, RG) {
	if (age >= 18 && height >= 1.75) {
		console.log("Wellcome, " + name + " Your RG " + RG)
	}
	else {
		console.log("please, leave");
	}
}
idPeaple("Erick", 20, 1.75, 676789);

// equação de grau 2
// math.pow(b, 2) + 4*a*c: (D)
// 
// -b +- math.sqrt(D)/ a * 2:(B)
// 
// -b + ==========
// -b + ==========