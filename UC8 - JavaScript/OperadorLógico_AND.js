/*
AND (E) - &&
true && true -> true
true && false -> false
false && true -> false
false && false -> false
*/

let numeroDeAlunos = 10

for (let contador = 1; contador <= numeroDeAlunos; contador++){

    if (contador === 0){
        console.log('O número atual é zero')
    } else if (contador % 2 == 0 && contador > 5) { // && singnifica E
        console.log('O número ' + contador + ' é PAR e maior que 5')
    } else if (contador % 2 == 0){
        console.log('O número ' + contador + ' é PAR')
    } else {
        console.log('O número ' + contador + ' é IMPAR e menor que 5')
    }
}