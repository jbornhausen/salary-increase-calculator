* Não precisamos colocar qual o tipo de valor que a variável vai receber, pois o JS é uma linguagem de programação não tipada, ou seja, ele é capaz de identificar o tipo de dado que a variável está recebendo e tratá-lo de acordo.
* `console.log ()` - é o que utilizamos para imprimir algo no console do navegador, ou seja, é uma função que exibe mensagens, valores ou resultados de expressões para fins de depuração e desenvolvimento.
* Deve sempre ser escrito em letra minúscula, pois o JS é case sensitive, ou seja, ele diferencia letras maiúsculas de minúsculas. Portanto, se escrevermos `Console.log ()` ou `CONSOLE.LOG ()`, o JS não reconhecerá a função e retornará um erro. Em alguns casos vai ser escrito em letra maiúscula como Console, mas o log deve ser escrito em letra minúscula.

---

# Alguns exemplos de comandos do JavaScript
* `alert("Minha primeira mensagem")` - é uma função que exibe uma caixa de diálogo com uma mensagem para o usuário. O usuário precisa clicar em "OK" para fechar.
* `window.confirm("Deseja realmente sair?")` - é uma função que exibe uma caixa de diálogo com uma mensagem e dois botões: "OK" e "Cancelar". O usuário pode clicar em "OK" para confirmar ou "Cancelar" para cancelar a ação. A função retorna um valor booleano: true se o usuário clicar em "OK" e false se clicar em "Cancelar".
* `window.prompt("Qual é o seu nome?")` - é uma função que exibe uma caixa de diálogo com uma mensagem e um campo de entrada para o usuário digitar uma resposta. O usuário pode clicar em "OK" para enviar a resposta ou "Cancelar" para cancelar a ação. A função retorna a string digitada pelo usuário se ele clicar em "OK" ou null se ele clicar em "Cancelar".

# Comentários no JavaScript
* `//` ou `/* */` -  O comentário de linha única é feito com // e o comentário de múltiplas linhas é feito com /* */.

---

# Variáveis no JavaScript
Pensar no exemplo de vagas de carro, tenho a vaga a1, a2, a3. Eu crio as vagas para colocar carro dentro. E eu não tenho como colocar mais de um carro dentro da mesma vaga. 

O sinal de `=` significa RECEBE; Então eu escrevo: `var a1 = "mobi"` 
Significa que a variável a1 recebe o valor mobi

O nome de cada variável se chama Identificador. Existem algumas regras de nomeação de identificadores:
* Podem começar com letra, $ ou _
* Não podem começar com número
* É possível usar letras ou números
* É possível usar acentos e símbolos
* Não podem conter espaços 
* Não podem ser palavras reservadas do JavaScript, como var, let, const, function, etc.
* o JS é case sensitive, então se eu colocar a variável como var a1 = "mobi" e depois tentar acessar a variável com A1, o JS não vai reconhecer e vai retornar um erro.

--- 

# Data Types
* `number`: representa valores numéricos, como 10, 3.14, -5, etc.
* `string`: representa uma sequência de caracteres, como "Olá", 'Mundo', etc.
* `boolean`: representa um valor lógico, que pode ser true (verdadeiro) ou false (falso).
* `null`: representa a ausência de valor ou um valor nulo. É um tipo de dado que indica que uma variável não tem um valor atribuído.
* `undefined`: representa uma variável que foi declarada, mas ainda não recebeu um valor. É um tipo de dado que indica que uma variável existe, mas seu valor é desconhecido ou não definido.
* `object`: representa um objeto, que é uma coleção de propriedades e métodos. Um objeto pode conter vários valores e funções relacionados.
* `function` : representa uma função, que é um bloco de código reutilizável que pode ser chamado para executar uma tarefa específica. As funções são objetos de primeira classe em JavaScript, o que significa que podem ser atribuídas a variáveis, passadas como argumentos para outras funções e retornadas como valores.

| Tipo de dado  | Descrição                                              |
|---------------|--------------------------------------------------------|
| number        | Valores numéricos                                      |
| string        | Caracteres em forma de texto                           |
| boolean       | Verdadeiro ou falso (1 ou 0)                           |
| function      | Bloco de código que realiza uma execução específica    |
| object        | Coleções de propriedades que representam uma entidade  |
| undefined     | Valor indefinido                                       |
| null          | Valor inexistente                                      |

---

# No terminal do VSCode
var a1 = "mobi"
var a2 = 10
var a3 = true
Se eu colocar typeof seguido do nome da variável, o terminal vai me mostrar o tipo de dado que a variável está recebendo. Por exemplo, se eu escrever typeof a1, o terminal vai me mostrar "string", pois a variável a1 está recebendo o valor "mobi", que é uma string. Se eu escrever typeof a2, o terminal vai me mostrar "number", pois a variável a2 está recebendo o valor 10, que é um número. Se eu escrever typeof a3, o terminal vai me mostrar "boolean", pois a variável a3 está recebendo o valor true, que é um booleano.

---

# Guardando informações das variáveis
* `var nome = window.prompt ("Qual é o seu nome?");` // agora vou ter o nome guardado dentro da variável. mas aqui ele só retorna TEXTO (STRING)
* `window.alert (`Olá ${nome}, como você está? Tudo bem?`)` // aqui eu estou usando a variável nome para mostrar o nome da pessoa que digitou no prompt, concatenando com a mensagem de saudação por meio do ${} - é melhor usar a crase para concatenar, pois é mais fácil de ler e escrever. Existe a possibilidade de terem aspas no seu texto, por isso é melhor usar a crase.

## De String para Número 
`Number.parseInt(n)` - converte uma string para um número inteiro. (3.5 + 2 = 5)
`Number.parseFloat(n)` - converte uma string para um número de ponto flutuante (0.5 + 7 = 7.5)
`Number(n)` - converte uma string para um número, seja inteiro ou de ponto flutuante. 

## De Número para String
`String(n)` - converte um número para uma string. (10 + 20 = "1020")
`n.toString()` - converte um número para uma string. (10 + 20 = "1020")

## Formatando Strings
var s = JavaScript
`'Eu estou aprendendo s'`// Não faz interpolação
`'Eu estou aprendendo' + s` // Concatenando a string com a variável s
`Eu estou aprendendo ${s}` // Usa template string, usando crase e o cifrão para fazer a interpolação da variável s dentro da string.

`s.lenght` // conta quantos caracteres a string tem
`s.toUpperCase()` // transforma a string em maiúscula
`s.toLowerCase()` // transforma a string em minúscula

## Formatando Numbers
`n1.toFixed(2)` // formata um número para ter 2 casas decimais, arredondando se necessário. Por exemplo, se n1 for 3.14159, n1.toFixed(2) vai retornar "3.14". Sempre vai sair uma string porque o resultado é formatado como texto.
`n1.toFixed(2).replace('.', ',')` // formata um número para ter 2 casas decimais e substitui o ponto por vírgula. 
`number.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})`// formata um número para o formato de moeda brasileira, usando a vírgula como separador decimal e o ponto como separador de milhares. Por exemplo, se number for 1234.56, vai retornar "R$ 1.234,56".
`idade = Number(idade)` // converte a variável idade, que é uma string, para um número, para que eu possa fazer operações matemáticas com ela. Por exemplo, se idade for "30", depois de converter para número, idade vai ser 30.

`document.write ("oi")` - é uma função que escreve um texto diretamente na página HTML. Ela é usada para exibir conteúdo dinâmico ou gerar elementos HTML a partir do JavaScript. No entanto, é importante usar essa função com cuidado, pois ela pode sobrescrever o conteúdo existente da página se for chamada após o carregamento inicial.

---

# Operadores 
### Aritméticos
* `+`: operador de adição, usado para somar números ou concatenar strings. 
* `-`: operador de subtração.
* `*`: operador de multiplicação.
* `/`: operador de divisão. É de números reais, com vírgula. Existe também a divisão inteira.
* `%`: operador de módulo, que retorna o **resto** da divisão entre dois números. Por exemplo, 10 % 3 retorna 1, pois 10 dividido por 3 é igual a 3 com um resto de 1. É a de números inteiros, sem vírgula.
* `**`: operador de exponenciação, que eleva um número a uma potência. Por exemplo, 2 ** 3 retorna 8, pois 2 elevado à potência de 3 é igual a 8.
>> A ordem de precedência de cálculo é: primeiro `()`, depois a exponenciação `**`, depois a multiplicação, divisão e módulo `*, /, %`, e por último a adição e subtração `+,-`. Se quiser mudar isso temos   que usar parênteses para indicar a ordem que queremos.

### Atribuição
* `=`: operador de atribuição, usado para atribuir um valor a uma variável. Por exemplo, `var n = 10;` atribui o valor 10 à variável n.
* Auto-atribuição // Se eu fizer `n = n + 4` eu vou dizer que n recebe n+4, então n passa a ser 10 (que eu atribui antes) + 4, n passa a ser 14. 
* Mas existe uma forma mais simples de escrever isso, que é usando o operador de auto-atribuição `+=`. Então eu posso escrever `n += 4`, que é a mesma coisa que `n = n + 4`. O mesmo vale para os outros operadores, como `-=`, `*=`, `/=`, etc. Mas não é possível fazer isso com outra variável, por exemplo: `n += 2 + x`; pois o operador de auto-atribuição só funciona com a própria variável.
* Incremento: `++` é um operador de incremento, que aumenta o valor de uma variável em 1. Por exemplo, se n for 10, depois de n++, n vai ser 11.
* Decremento: `--` é um operador de decremento, que diminui o valor de uma variável em 1. Por exemplo, se n for 10, depois de n--, n vai ser 9.
Pode ser usado antes ou depois da variável:
* n++
let n = 10;
console.log(n++); // 10
console.log(n);   // 11
* ++n 
let n = 10;
console.log(++n); // 11
console.log(n);   // 11

### Relacionais
O resultado sempre será um valor Booleano (verdadeiro ou falso)
* `>` - maior que
* `<` - menor que
* `>=` - maior ou igual a
* `<=` - menor ou igual a
* `==` - igual a (compara apenas o valor, sem comparar o tipo de dado. Por exemplo, 10 == "10" retorna true, pois os valores são iguais, mesmo que os tipos sejam diferentes). Nesse caso estamos comparando valor (10) com string ("10").
* `!=` - diferente de (compara apenas o valor, sem comparar o tipo de dado. Por exemplo, 10 != "10" retorna false, pois os valores são iguais, mesmo que os tipos sejam diferentes)
* `===` - identidade, compara o valor e o tipo de dado. Por exemplo, 10 === "10" retorna false, pois os valores são iguais, mas os tipos são diferentes (number e string).\

### Lógicos
* `!` - negação 
* `&&` - conjunção (E lógico) - só vai ser verdade quando os dois forem verdade
* `||` - disjunção (OU lógico) - só vai ser falso quando os dois forem falsos
>> Ordem de precedência dos lógicos: !, &&, ||
>> Em uma expressão com operadores aritméticos, relacionais e lógicos a ordem  é: primeiro os aritméticos, depois os relacionais e por último os lógicos. 

Exemplos:
* `idade >= 18 && idade <= 65` // aqui estamos verificando se a idade está entre 18 e 65 anos,incluindo o 15 e o 65.
* `estado== "RJ" || estado == "SP"` // aqui estamos verificando se o estado é RJ ou SP. Se for um dos dois, a expressão vai retornar true.
* `salário > 1500 && sexo != "M"` // aqui estamos verificando se o salário é maior que 1500 e o sexo é diferente de M. Se as duas condições forem verdadeiras, a expressão vai retornar true.

### Ternário
Junta 3 operandos - é uma forma mais simples de escrever um if-else. A sintaxe é: `condição ? expressão1 : expressão2`. Se a condição for verdadeira, a expressão1 é executada; se for falsa, a expressão2 é executada. 

* `?` - Esse é o operador ternário, que é usado para fazer uma escolha entre duas expressões com base em uma condição. 
* `:` - Esse é o separador entre as duas expressões do operador ternário. Ele indica que a expressão à esquerda do : é a expressão que será executada se a condição for verdadeira, e a expressão à direita do : é a expressão que será executada se a condição for falsa.

EXEMPLO: média >= 7 ? "Aprovado" : "Reprovado" // aqui estamos verificando se a média é maior ou igual a 7. Se for, a expressão vai retornar "Aprovado"; se for menor que 7, a expressão vai retornar "Reprovado".

