// Funções sao ações executadas assim que sao chamadas ou em decorrencia de um evento

// Toda função pode ter: chamada | parametro | ação | retorno


function parImpar(n){
    if(n%2 == 0){
        return 'par';
    }else{
        return 'impar';
    }
}

let res = parImpar(85)
console.log(`O número digitado é ${res}.`)

////////////////////////////////////////////////////////////////////////


function maior (n){
    if(n > 10){
        return ' maior que 10'
    }else if(n ==10){
        return ' igual a 10'
    }else{
        return 'menor que 10'
    }
}

let valor = maior(10)
console.log(` O valor é ${valor}.`)


