let numeroDeAlunos = 10

let contador = 0

while (contador <= numeroDeAlunos) {
    if (contador === 0) {
        console.log('O número atual é ZERO')
    } else if (contador % 2 == 1) { // % divisão sem sobras
        console.log('O núero ' + contador + ' é IMPAR')
    } else{
        console.log('O número ' + contador + ' é PAR')
    }
    contador++
}