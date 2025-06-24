const texto = "Aula de React Native -  aula3";
console.log(texto);

let nome: string = "Roni";
let idade: number = 49;
console.log(nome);

let linguagens = ["Java", "React", "PHP"];
linguagens.push("Ruby");
console.log(linguagens);

let matricula: string | number;

matricula = "123";
console.log(typeof matricula);
matricula = 124;
console.log(typeof matricula);

let preco: any;
preco = "200";
preco = 200.0;
preco = undefined;
console.log(preco);

let logado: boolean = true;

let situacao: string = '';
logado = Boolean(situacao);
console.log(logado);
