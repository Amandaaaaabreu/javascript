function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('txtano')
    var resultado = document.getElementById('resultado')
    if(formAno.value.length == 0 || formAno > ano){
        window.alert('Verifique os dados e tente novamente!')
    }else{
        window.alert('Tudo certo!')
    }
}