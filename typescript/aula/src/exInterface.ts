interface Curso {
  readonly id: number;
  nome: string;
  data: Date;
  preco: number;
  promocao: (preco: number) => void;
}

function mostrarPromocao(preco: number): void {
  console.log(`Promoção do curso:${preco}`);
}
const novoCurso: Curso = {
  id: 1,
  nome: "Java",
  data: new Date(2025, 5, 10),
  preco: 2000,
  promocao: mostrarPromocao,
};
//novoCurso.id = 2;
novoCurso.promocao(10000);

