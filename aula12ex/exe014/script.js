function carregar(){

    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem1')
    var data = new Date()
    var hora = data.getHours()
    hora = 20
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora>=0 && hora< 12){
       img.src = 'manha.png'
       document.body.style.background = '#FFB6C1'
    }else if(hora>=12 && hora <=18){
        img.src = 'tarde.png'
        document.body.style.background = '#B0C4DE'
    }else {
        img.src = 'noite.png'
        document.body.style.background = '#663399'
    }

}
