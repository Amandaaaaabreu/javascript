function Fatorial(n){
    let fat = 1
    for(let i = n; i > 1; i--){
        fat *= i
    }
    return fat
};

let n = 10


console.log(`O fatorial de ${n} é ${Fatorial (n)}`)