document.getElementById("titulo").innerHTML = "Tudo bem?";
document.write("Alguma coisa");

window.alert("Mensagem de exemplo");

console.log("A mensagem que eu inserir aqui aparecerá no console.");


// AULA SOBRE VARIÁVEIS

var nome = "Wagner";
var idade = 34;

alert("Meu nome é "+ nome + "e tenho " + idade+" anos.");

var x = 10;
var y = 15;

var total = x + y;
console.log(total);

//CONDICIONAIS

var hora = 9;
if (hora < 12) {
	console.log("Bom dia");
} else if( hora <= 18 )  {
	console.log("Boa tarde");
} else {
	console.log("Boa noite");
}

if ( hora >=12 && hora < 18  ){
	console.log("Boa tarde");
}

if(hora == 12 || hora == 18){
	console.log("Hora do Hash");
}

//definir variáveis usando let

let variavel = "Conteudo";

const novoNome = "Wagner"

//criar um objeto
const nomeSobrenome = {nome:"Wagner", sobrenome:"Amaro"}


//tipos de variáveis 

var string = "Wagner"; //string
var idade = 90; //number
var saldo = true; // boolean
var cidade; //indefinido

//para saber o tipo de variável use typeof
typeof idade;

var tipo = typeof idade; //armazena o tipo da variável - number


