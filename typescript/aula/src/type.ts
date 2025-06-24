type Marca = {
  readonly id: number;
  nome: string;
};

type Categoria = {
  descricao: string;
};

type MarcaCategoria = Marca & Categoria;

const marca: MarcaCategoria = {
  id: 1,
  nome: "BYD",
  descricao: "SUV",
};
//SPREAD
const array1 = [1, 2, 3, 4, 5, 6, 7];
const array2 = [...array1, 8, 9, 10];

console.log(array2);

const array3 = [8, 9, 10, ...array2];
console.log(array3);
