/*
let num = [2,5,1,3,7]

for(let pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`) // percurso para exibição em um vetor
}
*/


//num.length // para saber o comprimento de um array


let num = [2,4,1,3,5]
num.sort() // add em ordem

for(let ind in num){ // antes do IN eu add o nome do meu indice e depois do IN eu add o nome da variavel composta
    console.log(`O indíce ${ind} tem o valor ${num[ind]}`)
} // le sê : para cada indice em num eu vou mostar o num[ind]

// for otimizado para variaveis compostas e objetos 
// funciona para arrays e objetos