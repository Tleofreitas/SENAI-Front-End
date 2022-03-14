const listaDePecas = ["Ar condicionado","Motor","Amortecedor"]

console.log(listaDePecas)

if(listaDePecas.length < 10){
    console.log("É possível cadastrar peças")
} else  {
    console.log("Não há mais espaço na lista")
}

var peso = 50

if (peso > 100) {
    console.log("Peso adequado")
} else {
    console.log("Peso insuficiente")
}
let nomePeca = "Disco de freio"

if (nomePeca.length > 3){
    console.log("Nome adequado!")
} else if (nomePeca.length == 0) {
    console.log("O nome não pode ser vazio")
} else {
    console.log("O nome deve possuir mais de 3 caracteres")
}

switch (nomePeca.length) {
    case 0:
        console.log("O nome não pode ser vazio")
        break;

    case 1, 2, 3:
        console.log("O nome deve possuir mais de 3 caracteres")

    default:
        console.log("Nome adequado!") 
        break;
}



