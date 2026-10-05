// Tarefa 1 do Classroom

const titulo = document.getElementById("titulo");
const botao = document.getElementById("botao");

console.log("Página carregada com sucesso");
titulo.textContent = "Clique no botão abaixo";

botao.addEventListener("click", function (){
	alert("Olha, um aviso flutuante!");
});

//==================================================
// Tarefa 2 do Classroom

const nome = "Gaby";
console.log(nome);

let idade = 18;
console.log(idade);
idade = 19;
console.log(idade);

const produto = {
	nome: "Body Splash Deleite",
	valor: 79.99
};

console.log(produto.valor);

produto.valor = 80.0;

console.log(produto.valor);

//===================================================
// Tarefa 3 do Classroom

const x = 15;
const y = 4;

console.log("Soma:", x + y);
console.log("Subtração:", x - y);
console.log("Multiplicação:", x * y);
console.log("Divisão:", x / y);
console.log("Resto:", x % y);
console.log("Exponenciação:", x ** y);

console.log("x > y?", x > y);
console.log("y > x?", y > x);
console.log("x === y?", x === y);
console.log("x >= y?", x >= y);
console.log("x <= y?", x <= y);
console.log("x !== y?", x !== y);

console.log("x > 10 && y > 10?", x > 10 && y > 10);
console.log("x > 10 || y > 10?", x > 10 || y > 10);
console.log("!(x > y)?", !(x > y));
console.log("!(y > x)?", !(y > x));

//====================================================
// Tarefa 4 do Classroom

// if / else if / else com nota e switch com meses do ano

const nota = 59;

if (nota >= 70 && nota <=100){
	console.log("Aprovado");
} else if (nota >= 50 && nota < 70){
	console.log("Recuperação");
} else if (nota >= 0 && nota < 50){
	console.log("Reprovado");
} else {
	console.log("A nota informada não é válida.");
}

const numeroMes = 9;

switch (numeroMes){
	case 1:
		console.log("Janeiro");
		break;
		
	case 2:
		console.log("Fevereiro");
		break;
		
	case 3:
		console.log("Março");
		break;
		
	case 4:
		console.log("Abril");
		break;
		
	case 5:
		console.log("Maio");
		break;
		
	case 6:
		console.log("Junho");
		break;
		
	case 7:
		console.log("Julho");
		break;
		
	case 8:
		console.log("Agosto");
		break;
		
	case 9:
		console.log("Setembro");
		break;
		
	case 10:
		console.log("Outubro");
		break;
		
	case 11:
		console.log("Novembro");
		break;
		
	case 12:
		console.log("Dezembro");
		break;
		
	default:
		console.log("O número informado não é válido.");
		break;
}

// while, array e for

let contador = 0;
while (contador <= 20){
	console.log(contador);
	contador = contador + 2;
}

const cidades = ["Belo Horizonte", "São Paulo", "Rio de Janeiro", "Matipó"];

for (let i = 0; i < cidades.length; i++){
	console.log(cidades[i]);
}
	
for (let j = 10; j >= 1; j--){
	console.log(j);
}