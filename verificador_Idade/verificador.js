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
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(sexo[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                // crianca
                img.setAttribute('src', 'Fotos Ex15 Curso JS/foto-bebe-m.png')
            }else if(idade >= 10 && idade <= 21){
                // jovem
                img.setAttribute('src', 'Fotos Ex15 Curso JS/foto-jovem-m.png')
            }else if(idade > 21 && idade < 50){
                // adulto
                img.setAttribute('src', 'Fotos Ex15 Curso JS/foto-adulto-m.png')
            }else{
                //idoso
                img.setAttribute('src', 'Fotos Ex15 Curso JS/foto-idoso-m.png')
            }
                
        } else if(sexo[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                // crianca
                img.setAttribute('src', 'Fotos Ex15 Curso JS/foto-bebe-f.png')
            }else if(idade >= 10 && idade <= 21){
                // jovem
                img.setAttribute('src', 'Fotos Ex15 Curso JS/foto-jovem-f.png')
            }else if(idade > 21 && idade < 50){
                // adulto
                img.setAttribute('src', 'Fotos Ex15 Curso JS/foto-adulto-f.png')
            }else{
                //idoso
                img.setAttribute('src', 'Fotos Ex15 Curso JS/foto-idoso-f.png')
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        resultado.appendChild(img)

    }
}