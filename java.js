document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    calcular();
  }
});

function calcular () {
var nome = document.getElementById('nome').value
var salario = Number (document.getElementById('salario').value)
var tempo = Number(document.getElementById ('tempo').value)

var aumento = tempo <= 3 ? salario * 0.05 
: tempo <= 10 ?
salario * 0.1 : salario * 0.15

var porcentagem = tempo <= 3? '5%' : 
tempo <= 10 ?
'10%' : '15%'

var resultado = document.getElementById('resultado')

resultado.innerHTML =
    `Olá ${nome.toUpperCase()} 
    <br>
    Salário atual ${salario.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} 
    <br>
    A porcentagem de aumento foi de ${porcentagem} 
    <br>
    Seu aumento será de  ${aumento.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} 
    <br>
    Totalizando ${(salario + aumento).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} 
    `
     resultado.style.display = 'block'
     resultado.scrollIntoView({ behavior: "smooth" })
  confetti({
      particleCount: 400,
      spread: 90,
      origin: { y: 1.2 }
    });
  }