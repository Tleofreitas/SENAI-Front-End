// Atribuindo Data do Evento
let diaAtual = new Date()

let dataSelecionada = new Date('2021-12-10')

if (dataSelecionada <= diaAtual) {
    console.log('Data Inválida')
} else{
    console.log('Data Selecionada')
}

// Validando Maioridade (18 anos)
let dataDeNascimento = new Date('2003-09-05')
let maioridade = 6570 // Quantidade de dias referente a 18 anos
diaAtual.setDate(diaAtual.getDate() - maioridade)

if (dataDeNascimento >= diaAtual ) {
    console.log('Cadastro não permitido!')
} else {
    console.log('Cadastro permitido')
}

// Verificação de participantes. Total = 100
let participantesDoEvento = ['Gustavo', 'Jean', 'José','Thiago','Matheus']

if (participantesDoEvento.length <= 100) {
    console.log('Cadastro realizado com sucesso!')
} else{
    console.log('Cadastro não permitido. Limite de participantes atingido')
}

// Exibir lista de participantes do evento
participantesDoEvento.forEach(index => {
    console.log(index)
})









