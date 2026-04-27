/* var nome = window.prompt("Qual é o seu nome?")
var salário = Number(window.prompt("Qual é o seu salário?"))
var tempoDeEmpresa = window.prompt ("Quanto tempo você tem de empresa?")

var aumento = tempoDeEmpresa <= 3 ? salário * 0.05 
: tempoDeEmpresa <= 10 ?
salário * 0.1 : salário * 0.15

var porcentagem = tempoDeEmpresa <= 3? '5%' : 
tempoDeEmpresa <= 10 ?
'10%' : '15%'

document.write (
    `Olá ${nome.toUpperCase()} <p>
    Salário atual ${salário.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} <p> 
    A porcentagem de aumento foi de ${porcentagem} <p>
    Seu aumento será de  ${aumento.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} <p>
    Totalizando ${(salário + aumento).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} <p>
    `) *\
