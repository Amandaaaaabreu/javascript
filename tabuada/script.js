function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if(num.value.length == 0){
        window.alert('Digita um número')
        
    }else{
        let n = Number(num.value) // transformando o que foi escrito na caixa de texto se string para int
        let c = 1 
        tab.innerHTML = '' //limpando a minha area de resultado.
        while(c <= 10){
           let item = document.createElement('option')
           item.text = ` ${n} x ${c} = ${n*c} `
           item.value = ` tab${c}`
           tab.appendChild(item) // add um item ao filho
           c++
        }

    }

    
}