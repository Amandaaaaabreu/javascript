function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('manha')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 22
 
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora <12){
       
        img.src = 'modelo/fotomanha.png'
        document.body.style.background = '#EAE3D1'

    } else if(hora >= 12 && hora <= 18){
      
        img.src ='modelo/fototarde.png'
        document.body.style.background = '#D88971'
    }else{
        
        img.src = 'modelo/fotonoite.png'
        document.body.style.background = '#455461'
    }
}

