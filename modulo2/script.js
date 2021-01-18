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