var titulo = document.getElementById("titulo");

titulo.innerHTML = "Novo Título alterado pelo JavaScript";

var input = document.getElementById("campo");
input.value = "Novo conteúdo do input";

//FUNCOES
function alterar(){
    document.getElementById("trocar").innerHTML = "Texto alterado pela função";
}

function somar(x, y){
    let total = x + y;

    return total;
}

var resultado = somar(5, 94);
console.log(resultado);

//eventos de teclado
function digitou(e){
    if(e.key == 13 && e.ctrlKey == true){
        let texto = document.getElementById("inputdeteste").value;
        console.log(texto);
    }
}

//aulo de mudança de estilos
function vermelho(){
    limpar();
    document.getElementById("mudarcor").classList.add('vermelho');
}

function azul(){
    limpar();
    document.getElementById("mudarcor").classList.add('azul');
}

function verde(){
    limpar();
    document.getElementById("mudarcor").classList.add('verde');
}

function limpar(){
    document.getElementById("mudarcor").classList.remove("vermelho");
    document.getElementById("mudarcor").classList.remove("verde");
    document.getElementById("mudarcor").classList.remove("azul");
}

function mostrarTelefone(elemento){
    elemento.style.display = "none";
    document.getElementById("telefone").style.display = "block";
}


//CRIAÇÃO DE ARRAYS

let carros1 = ["Palio", "Uno", "HB20"];

let carros = [
    "Carro2",
    "Carro3",
    function(){
        console.log("Função Dentor do Array");
    }
];

//para acessar a função dentro do array
carros[2]();


//OBJETOS
let carroOB = {
    nome:"Fiat",
    modelo:"Uno",
    peso:'800kg',
    ligado:false,
    ligar:function(){
        this.ligado = true;
        console.log("VRUM VRUM!");
    },
    acelerar:function(){
        if(this.ligado == true){
            console.log("Raammmmmmmmmmm!");
        } else {
            console.log("Ligue o "+ this.modelo +" antes de acelerar");
        }
        
    }

};

//exibir item do objeto
console.log("Modelo " + carroOB.nome);

carroOB.acelerar();

//array de objetos
let teste = [
    {nome:'Fiat', modelo:'Palio'},
    {nome:'Toyota', modelo:'Corolla'}
]

console.log(teste[1].nome);


//switch
function exibirdia(valor){

    let frase = "";
   
        switch (valor) {
            case '1':
            case '7':
                frase = "Hoje é final de semana";
                break;
        
            default:
                frase = "Dia de semana, bora trabalhar";
                break;
        }
        

  

    document.getElementById("resposta-semana").innerHTML = frase;

}


//FOR

let cont = '';

for (let i = 0; i < 50; i++){
    cont += "<div style='padding:5px; position:relative; width: 50px;'>" + i + "<br/></div>";
}

document.getElementById("demo").innerHTML = cont;


// FOR DE ARRAY
let carroArray = ['Ferrari', 'Fusca', 'Palio', 'Corolla'];

let html = '<ul>';

for(let i in carroArray){
 html += '<li>'+ carroArray[i] + '</li>';
}

html += '</ul>';

document.getElementById("demo2").innerHTML = html;
