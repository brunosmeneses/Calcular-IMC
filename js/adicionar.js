var botaoAdicionar = document.querySelector("#adicionar");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");

    var paciente = Form(form);

    var adiciona = adicionarTabela(paciente);
   
});

function Form(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        imc: calculaImc(form.peso.value, form.altura.value)     
        
    }

    return paciente;
}

function montaTr(paciente) {
    var criaTr = document.createElement("tr");

    criaTr.classList.add("paciente");

    criaTr.appendChild(montaTd(paciente.nome, "Nome"));
    criaTr.appendChild(montaTd(paciente.peso, "Peso"));
    criaTr.appendChild(montaTd(paciente.altura, "altura"));
    criaTr.appendChild(montaTd(paciente.imc, "Imc"));
    var tab =  document.querySelector('table');

    

    tab.appendChild(criaTr);

	return criaTr;
    console.log(tab);
}

function montaTd(dado, classe) {
	var td = document.createElement('td');
	td.classList.add(classe);
	td.textContent = dado;
 	return td;
}

function adicionarTabela(paciente){
	var criaTr = montaTr(paciente);
    var tabela = document.querySelector("tbody");
    tabela.appendChild(criaTr);

    return tabela;
}


