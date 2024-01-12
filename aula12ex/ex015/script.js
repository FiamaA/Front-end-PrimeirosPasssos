function verificar(){
     var data = new Date()
     var ano = data.getFullYear()
     var fano = document.getElementById('txtano')
     var res = document.getElementById('res')

     if (fano.value.length==0 || fano.value > ano){
        alert('Verifique os dados e tente novamente')
     }else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if(fsex[0].checked){
        genero = 'Homem'
        if(idade>=0 && idade<10){
            img.setAttribute('src','bebeh.png')
        }else if(idade>10 && idade<21){
        //jovem
           img.setAttribute('src','jhomem.png')
        }else if(idade>21 && idade < 50){
            //adulto
            img.setAttribute('src','ahomem.png')
        }else{
            //idoso
            img.setAttribute('src','ihomem.png')
        }
       }else if(fsex[1].checked){
        genero = 'Mulher'

          if(idade>=0 && idade<10){
            //criança
            img.setAttribute('src','bebem.png')
          }else if(idade>10 && idade<21){
        //jovem
            img.setAttribute('src','jmulher.png')
          }else if(idade>21 && idade < 50){
            //adulto
            img.setAttribute('src','amulher.png')
          }else{
            //idoso
            img.setAttribute('src','imulher.png')
          }

       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${genero} com ${idade} anos`
       res.appendChild(img)
     }


}