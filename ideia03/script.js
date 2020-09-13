const name = "Erick";
const name2 = "Ruthe";

const idade = 20;
const idade2 = 25;

const aposentadoriaMas = 50;
const aposentadoriaFem = 45

const anosDeTrabalho = 30;
const anosDeTrabalho2 = 21;

const aposentaMas = (idade, anosDeTrabalho, aposentadoriaMas) => {
	const anoDeAposento = idade + anosDeTrabalho >= aposentadoriaMas;

	if (anoDeAposento == true) {
		console.log("Parabéns, " + name + " você será aposentado por anos de serviços. ")
	}
	else {
		console.log("Você precisa esperar mais alguns anos para poder se aposentar")
	}

}
aposentaMas(idade, anosDeTrabalho, aposentadoriaMas);

console.log("\n")

const aposentaFem = (idade2, anosDeTrabalho2, aposentadoriaFem) => {
	const anoDeAposento = idade2 + anosDeTrabalho2 >= aposentadoriaFem;

	if (anoDeAposento == true) {
		console.log("Parabéns " + name2 + " sua aposentadoria foi concedida com sucesso.");
	}
	else {
		console.log("Aguarde alguns anos para que sua aposentadoria seja concedida.");
	}

}
aposentaFem(idade2, anosDeTrabalho2, aposentadoriaFem);

















