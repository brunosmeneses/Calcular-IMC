function calculaImc(imc, peso, altura) {
	var peso = document.getElementById('peso').value;
	var altura = document.getElementById('altura').value;

	var imc = 0;
	imc = peso / (altura * altura);

	return Math.round(imc);
}