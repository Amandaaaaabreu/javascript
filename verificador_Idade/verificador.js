function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('txtano')
    var resultado = document.getElementById('resultado')
    if(formAno.value.length == 0 || Number(formAno.value) > ano){
        window.alert('Verifique os dados e tente novamente!')
    }else{
        var sexo = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        var genero = ''
        if(sexo[0].checked){
            genero = 'Homem'
        } else if(sexo[1].checked){
            genero = 'Mulher'
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
}