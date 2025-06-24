"use strict";
function mostrarPromocao(preco) {
    console.log(`Promoção do curso:${preco}`);
}
const novoCurso = {
    id: 1,
    nome: "Java",
    data: new Date(2025, 5, 10),
    preco: 2000,
    promocao: mostrarPromocao,
};
//novoCurso.id = 2;
novoCurso.promocao(10000);
