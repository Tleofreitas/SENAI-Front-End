let numeroDeAlunos = 10

let contador = 1

do {
    if(contador === 0){
        console.log('O número atual é ZERO')
    } else if (contador % 2 != 0){
        console.log('O número ' + contador + ' é IMPAR')
    } else {
        console.log('O número ' + contador + ' é PAR')
    }
    contador++ // ++contador também funciona 
} while (contador <= numeroDeAlunos);