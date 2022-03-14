const listaFrutas = ["Maça", "Banana", "Pera"]
console.log(listaFrutas)

// verificação de dúzia
if (listaFrutas.length >12) {
    console.log("Fruta adicionada")
} else {
    console.log("A fruta só sera adicionada a partir de uma dúzia")
}
// verificação de dúzia 2
var quantidade = 12

if (quantidade >= 12) {
    console.log("Quantidade adequada")
} else {
    console.log("Quantidade mínima a partir de uma dúzia")
}
// Verificação de nome da Fruta
let nomeFruta = "Laranja"
if (nomeFruta.length >3) {
    console.log("Nome adequado")
} else if (nomeFruta.length == 0) {
    console.log("O nome da fruta não pode ser vazio")
}   else {
    console.log("Nome Inválido")
}

