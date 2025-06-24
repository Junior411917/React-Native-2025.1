interface Aluno {
  nome: string;
  idade: number;
  time?: string;
  endereco: string;
}

const aluno: Aluno = {
  nome: "Leandro",
  idade: 30,
  time: "Flamengo",
  endereco: "Rua Bingen",
};
console.log(aluno);

function exibirAluno({ nome, idade, endereco }: Aluno): string {
  return `${nome} - ${idade} - ${endereco}`;
}

console.log(
  exibirAluno({ nome: "Mariana", idade: 45, endereco: "Rua do Imperador" })
);
