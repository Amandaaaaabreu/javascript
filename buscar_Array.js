let num = [2,5,1,3,7]
//num.sort() // add em ordem

for(let ind in num){ // antes do IN eu add o nome do meu indice e depois do IN eu add o nome da variavel composta
    console.log(`O indíce ${ind} tem o valor ${num[ind]}`)
}

let pos = num.indexOf(2) // me passa a posicao do vetor


if( pos == -1){
    console.log('O valor não está definido.')
}else{
    console.log(`O valor 2 está na posição ${pos}`)
}