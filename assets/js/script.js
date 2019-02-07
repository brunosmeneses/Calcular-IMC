// evento de click
$("button").bind('click', function(){
  //pegando os valores
    var peso = $('#peso').val();
    var altura = $('#altura').val();
    var imc = calculaImc();

     //adicionando classe
     $("#div").addClass("res");

     // fazendo validação e mostrando o resultado
    if (peso.length == 0 || altura.length == 0) {
      $("#res").html("Por favor preencha os campos!");
      var peso = $('#peso').addClass("valida");
      var altura = $('#altura').addClass("valida");
    }
    else{
      var peso = $('#peso').removeClass("valida");
      var altura = $('#altura').removeClass("valida");
      $("#res").html("Seu IMC é: "+imc);
      classificacao();
    }
    
     
      
      Limpar();
})

// função para fazer o calculo do imc
function calculaImc(){
  
        var peso = $('#peso').val();
        var altura = $('#altura').val();

        peso = peso.replace(',' , '.');
        altura = altura.replace(',' , '.');

        var soma = peso / (altura*altura);

        var imc = parseFloat(soma).toFixed(1);

        return imc

};

// função para limpar os inputs
function Limpar(){
    var peso = $('#peso').val(" ");
    var altura = $('#altura').val(" ");
}



// função para mostrar as classificação
function classificacao() {
  var imc = calculaImc();
   if (imc < 18.5) {
    $("#cls").html("MAGREZA").css("color", "#FF0000");
   }
   else if (imc == 18.5 || imc <= 24.9) {
    $("#cls").html("SAUDÁVEL").css("color", "#00FF00");
   }
   else if (imc == 25.0 || imc <= 29.9) {
    $("#cls").html("SOBREPESO").css("color", "#FFA500");
   }
   else if (imc == 30.0 || imc <= 34.9) {
    $("#cls").html("OBESIDADE GRAU I").css("color", "#FF8C00");
   }
   else if (imc == 35.0 || imc <= 39.9) {
    $("#cls").html("OBESIDADE SEVERA GRAU II").css("color", "#FF4500");
   }
   else if (imc > 40) {
    $("#cls").html("OBESIDADE MÓRBIDA GRAU III").css("color", "#FF0000")
   }
}








