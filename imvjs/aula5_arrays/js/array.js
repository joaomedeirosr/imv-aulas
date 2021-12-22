/* Criando um Array ou Vetor (Unidimensionais)
 OBS: --> Os elementos do array são irmão entre si*/
var frutas = ["Banana", "Maçã", "Laranja"];

var nome = "João";
/* Os Arrays aceitam diferentes tipos de dados, e até mesmo
 variaveis concatenadas como por exemplo
 ${nome} que encapsula a variavel nome = 'João' e
 a chama dentro do Array e retorna ela dentro do array*/
var caixa = ["Pedro", 12, true, ` Pessoa ${nome}`, -1];

console.log(frutas);
console.log(caixa);

/*Arrays Multidimensioais 
 --> Os Arrays multidimesionais são Arrays dentro de Arrays
 ou seja são diferentes niveis de Array dentro do outro
 --> Veja um Exemplo abaixo : */

var caixa2 = [
  "João",
  "Victor",
  23,
  1.75,
  ["Anna", "Laura", 20, 1.69, ["Victor", "Simão", 19, 1.89]],
];

console.log(caixa2);
