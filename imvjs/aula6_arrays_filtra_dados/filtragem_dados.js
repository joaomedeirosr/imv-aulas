// Criando um array de objetos
const pessoa = [
  { id: 1, nome: "João" },
  { id: 2, nome: "Ali" },
  { id: 3, nome: "Mass" },
  { id: 4, nome: "Mass" },
];

// Função Callback para retornar ou chamar o objeto que tenho nome ou atributo "Mass" (Verificações/Filtros)
console.log(
  pessoa.filter((p) => {
    return p.nome == "Mass";
  })
);

// Função Callback para retornar um id: ou seja a posição daquele objeto no Array (Consultas/Verificações)

console.log(
  pessoa.findIndex((p) => {
    return p.id == "3";
  })
);
// Realizando uma chamada call back dinâmica para retornar o nome correspondente ao id do Array pessoa Exemplo:
console.log(
  pessoa.findIndex((p) => {
    return p.id == "1";
  }).nome
);
