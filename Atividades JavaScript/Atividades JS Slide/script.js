// Tarefa 1 do slide
const nome = "João";
const curso = "Ciência da Computação";
let nota = 8;
let idade = 19;

console.log(`Aluno ${nome} possui nota ${nota}.`);

//===================================================
// tarefa 2 do slide

function somar(num1, num2){
	return num1 + num2;
}

function subtrair (num1, num2){
	return num1 - num2;
}

function multiplicar (num1, num2){
	return num1 * num2;
}

function dividir (num1, num2){
	if (num2 === 0){
		return "A divisão não é possível.";
	} else {
		return num1 / num2;
	}
}

console.log(somar(5, 3));
console.log(subtrair(6, 8));
console.log(multiplicar(3, 4));
console.log(dividir(10, 2));

//====================================================
// Tarefa 3 do slide

function sistemaNotas (nota){
	if (nota >= 7){
		console.log("Aprovado!");
	} else {
		console.log ("Reprovado...");
	}
}

sistemaNotas(10);
sistemaNotas(3);
sistemaNotas(7);

//====================================================
// Tarefa 4 do slide

function tabuada (numero){
	for (let i = 1; i <= 10; i++){
		console.log(numero + " x " + i + " = " + (numero * i));
	}
}

console.log("=== Tabuada ===");
tabuada (7);
//====================================================
// Tarefa 5 do slide

const titulo = document.getElementById("titulo");
const botao = document.getElementById("botao");

botao.addEventListener ("click", function() {
	titulo.textContent = "Parabéns, você acaba de perder seu tempo.";
});
//====================================================