function classificacao() {
	var imc = document.getElementById('imc').value;

	if (imc < 16) {

		document.getElementById('show').innerHTML = "MAGREZA GRAU III";
	}
	else if (imc == 16 || imc < 17) {
		document.getElementById('show').innerHTML = "MAGREZA GRAU II";
	}
	else if (imc == 17 || imc < 18.5) {
		document.getElementById('show').innerHTML = "MAGREZA GRAU I";
	}
	else if (imc == 18.5 || imc < 25) {
		document.getElementById('show').innerHTML = "EUTROFIA(PESO ADEQUADO)";
	}
	else if (imc == 25 || imc < 30) {
		document.getElementById('show').innerHTML = "SOBREPESO";
	}
	else if (imc == 30 || imc < 35) {
		document.getElementById('show').innerHTML = "OBESIDADE GRAU I";
	}
	else if (imc == 35 || imc < 40) {
		document.getElementById('show').innerHTML = "OBESIDADE GRAU II";
	}
	else {
		document.getElementById('show').innerHTML = "OBESIDADE GRAU III (MÓRBIDA))";
	}
}
