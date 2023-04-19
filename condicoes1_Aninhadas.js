// condição de aninhamento

var idade = 16
console.log(`Você tem ${idade} anos.`)

if(idade < 16){
    console.log('Ainda não vota!')
}
else if( idade < 18 || idade > 65 ){
    console.log('Seu voto é Opcional!')
}
else if(idade >= 18){
    console.log('Seu voto é obrigatório!')
}
  