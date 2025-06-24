interface Pessoa {
  nome: string;
  idade: number;
}

interface Funcionario extends Pessoa {
  cargo: string;
  salario?: number;
}
const colaborador: Funcionario = {
  nome: "Adriana",
  idade: 25,
  cargo: "Programadora",
};
