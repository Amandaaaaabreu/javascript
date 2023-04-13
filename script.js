function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('manha')
    var data = new Date()
    var hora = data.getHours()
 
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora <12){
        // bomdia
        img.src = 'modelo/fotomanha.png'
    } else if(hora >= 12 && hora <18){
        //boa tarde
        img.src ='modelo/fototarde.png'
    }else{
        //boa noite
        img.src = 'modelo/fotonoite.png'
    }
}

