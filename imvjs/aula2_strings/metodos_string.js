// Métodos para trabalhar com strings

var frutas = "Banana, Maçã , Laranja";

/* O Método .slice() ele corta ou fatia sua string, onde é necessário você passar um start pra ele e o end é opcional
ou seja se você não passar um final por default ele irá pegar da posição inicial e irá até o final da string*/
frutas.slice(0, 8);

/* O Método .substring() tem a mesma função do método slice ou seja particionar ou fatiar uma string porém o método substring não aceita parâmetros negativos ou seja
não tem o mesmo poder de se cortar de trás para frente!*/
frutas.substring(2);

/* O Método .substr() tem a mesma  função dos 3 anteriores porém diferente dos demais acima ele recebe parâmetros start e length ou seja é preciso passar
o local de ínicio e o comprimento ou quantidade de caracteres que quero cortar/fatiar de uma só vez por exemplo: */
frutas.substr(6, 6);

// Expressões Regulares em JavaScript é uma forma avançada de tratar textos ou strings.

var texto = "Ah.. a Microsoft, eu gosto muito da Microsoft!";

/* O Método .replace funciona com função de alterar um pedaço de string, por exemplo se quisermos alterar Microsft na palavra por Apple,
devemos passar como valor de entrada um searchValue ou seja o valor procurado e um replaceValue ou uma string alvo.*/
texto.replace("Microsoft", "Apple");

/* O Método .replace como mencionado acima  funciona seguindo algumas características
logo, se não for utilizado com expressões regulares podem gerar algumas expressões 
 que podem "incomodar" ter alguns problemas como por exemplo. Veja abaixo como resolver estes problemas.
*/
/* O " g " serve para apontar para as expressões regulares que agora Microsoft é tratado como uma String global ou seja é para ele
 tornar global a string Microsoft*/
texto.replace(/Microsoft/g, "Apple");

//O " i " serve para dizer que Microsoft é uma string global e insensitive case ou seja ela não entra na regra do sensitive case
texto.replace(/Microsoft/gi, "Apple");

// CONCATENAÇÃO CONVENCIONAL
var nome = "Silvio";
var sobrenome = "Sampaio";
var nomeCompleto = "Nome: " + nome + " " + sobrenome;

// TEMPLATE STRING
var nome = "Silvio";
var sobrenome = "Sampaio";
var nomeCompleto = `Nome: ${nome} ${sobrenome}`;

// CHARTAT
var texto = "Silvio Sampaio";
console.log(texto.charAt(0));

// ACESSO VIA ARRAY []
var texto = "Silvio Sampaio";
console.log(texto[0]);

// UPPERCASE
// TRANSFORMA TODOS OS CARACTERES EM MAIÚSCULO
var texto = "Silvio Sampaio";
var maiusculo = texto.toUpperCase();

// LOWECASE
// TRANSFORMA TODOS OS CARACTERES EM MINÚSCULO
var texto = "Silvio Sampaio";
var minusculo = texto.toLowerCase();

// TRIM
// REMOVE OS ESPAÇOS INICIAIS E FINAIS
var texto = "    Silvio Sampaio           ";
console.log(texto.trim());

// PADDING START
// PREENCHE O INÍCIO DE UMA STRING
var preco = "5";
console.log(preco.padStart(4, 0));

// PADDING END
// PREENCHE O FINAL DE UMA STRING
var preco = "1";
console.log(preco.padEnd(4, 0));
