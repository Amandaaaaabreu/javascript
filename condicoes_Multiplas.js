// condicoes multiplas
// nunca esquecer do break no final de cada bloco.

var agora = new Date()
var diaSemana = agora.getDay()


/*
   0 = Domingo
   1 = Segunda
   2 = Terça
   3 = Quarta 
   4 = Quinta 
   5 = Sexta
   6 = Sabádo
*/

switch(diaSemana){ // switch é para dados pontuais, não para intervalos. 
                   // Funciona com números inteiros e strings/caracteres
    case 0:
        console.log('Hojé é Domingo!')
        break

    case 1: 
        console.log('Hoje é Segunda!')
        break

    case 2:
        console.log('Hoje é Terça!')
        break

    case 3:
        console.log('Hoje é Quarta!')
        break

    case 4:
        console.log('Hoje é Quinta!')
        break

    case 5:
        console.log('Hoje é Sexta!')
        break

    case 6:
        console.log('Hoje é Sábado!')

    default:
        console.log('Dia Inválido/Erro')
    break
}