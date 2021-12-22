var x = 123;

// Método .toString
console.log(x.toString());

console.log((123).toString());

/*Expressões dinâmicas também funciona com o método toString() pois assim que chamo o método ele realiza o calculo e depois
acessa o objeto da variavél number ou seja o resultado de 123+20*/
console.log((123 + 20).toString());

/* Método .toFixed --> ele serve ou auxilia
 para que seja possível se manipular a quantidade de casas
 decimas depois da vigula se quer! 
 --> Exemplo : num_pi.toFixed(3); --> irá imprimir 3 casas

 --> OBS : Lembrando ele ajusta baseado no que foi passado
 ou seja quando não há digitos ele completa com "0(zero)"
*/
var num_pi = 3.1415;

console.log(num_pi.toFixed());
console.log(num_pi.toFixed(3));
console.log(num_pi.toFixed(5));
