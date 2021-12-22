// Usando o .length() para imprimir o tamanho do array
var frutas = ["Banana", "Maçã", "Laranja"];

console.log(frutas.length);

// Usando o .toString() para transformar tudo em String
var nome = "João";
var caixa = ["Pedro", 12, true, ` Pessoa ${nome}`, -1];
console.log(caixa.toString());

//Usando o .join() para alterar o separador de vírgula para ** por exemplo
var vetor = ["João", 23, "Victor", 1.74, "Medeiros", 83, "Rocha"];
console.log(vetor.join(", -"));

//Usando o método .remover a ultima posição do array
console.log(vetor.pop());
console.log(vetor);

// Usando o método .push para adicionar a ultima posição do array
console.log(vetor.push("Rocha"));
console.log(vetor);

// Reatribuindo valores do array
vetor[2] = "Luiz";

console.log(vetor);

// Deletando elementos do array
delete vetor[0];
console.log(vetor);

/*Removendo posições de um array com o .splice()
 --> O Splice funciona da seguinte maneira :
    --> É passado na primeira posição a posição em que se 
    quer começar removendo, e opcionalmente é possível,
    passar quantos elementos se quer remover!
 */
console.log(vetor.splice(0, 1));

//Flat map ou percorrendo arrays (***IMPORTANTE***)

var array2 = ["Jonas", "João", 23, "Victor", 1.74, "Medeiros", 83, "Rocha"];

// Só funcionou no console do navegador
array2.flatMap((item) => {
  return item + "João Victor";
});
