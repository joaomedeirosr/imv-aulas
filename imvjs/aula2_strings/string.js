// Forma rápida de realizar comentários em JavaScript ou comentários de uma única linha
/* Tipos de maneiras de se criar strings em JavaScript*/

var nome = "João";

var nome2 = 'João é um nome "legal" ';

let nome3 = "João 'olá' ";

var texto = `Meu texto`;
var texto = `Meu texto 'com aspas simples' no meio`;
var texto = `Meu texto "com aspas duplas" no meio`;

/* Encapsulamento ou envelopamento é um processo que consiste imprimir uma variavél*/

var idade = 23;

var meuEu = `Meu nome é ${nome} e tenho, ${idade} anos`;

console.log(meuEu);

/*Tudo no JavaScript é objeto*/

/* Criando agora uma variavél para aprender como extrair o tamanho da string*/

var alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

console.log(alfabeto.length);

var variavel =
  " A var é uma palavra reservada para se alocar um conteúdo ou dado na memória e ela é acessível ou disponível em toda a aplicação";

console.log(variavel.length);

var let =
  "Já no let é um pouco diferente do que no 'var' no let aquela variavél só fica disponível ou acessível dentro do escopo em que ela foi criada ou seja ela só é acessível dentro do {}";
console.log(let.length);

var cons =
  " Por fim no const temos um caso diferente dos dois anteriores no const ele é uma palavra reservada de variavél em que o proprio nome ja sugere é uma constante ou seja a variavél criada com const não pode ser re atribuida e tera sempre aquele mesmo valor, entretanto ela pode ser modificada quando temos um array ou quando é uma objeto";
