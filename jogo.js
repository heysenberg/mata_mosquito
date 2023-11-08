var altura = 0
var largura = 0
var vidas = 1
var tempo = 10
var criaMoscaTempo = 1500
var nivel = window.location.search
nivel = nivel.replace('?','')

if(nivel == 'normal')
{
criaMoscaTempo = 1500
}else if (nivel == 'dificil')
{
criaMoscaTempo = 1000
}else if (nivel == 'chucknorris')
{
criaMoscaTempo = 750
}

function ajustaTamanhoJogo()
{
    altura = window.innerHeight
    largura = window.innerWidth
    
}

function posicaoRandomica()
{
    //REMOVER O MOSQUITO ANTERIOR CASO EXISTA
    if(document.getElementById('mosquito'))
    {
        document.getElementById('mosquito').remove()
        if(vidas > 3)
        {
            window.location.href = 'fim_de_jogo.html'
        }
        else
        {
            document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"
            vidas++
        }
    }
    //

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    if(posicaoX<0){posicaoX = 0}
    if(posicaoY<0){posicaoY = 0}
    

    //CRIAR O ELEMENTO MOSQUITO
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function()
    {
        this.remove()
    }
    
    document.body.appendChild(mosquito) 
    //   
}

function tamanhoAleatorio()
{
    var classe = Math.floor(Math.random() * 3)
    
    if(classe == 0)
    {
        return 'mosquito1'
    }
    else if(classe == 1)
    {
        return 'mosquito2'
    }
    else if(classe == 2)
    {
        return 'mosquito3'
    }
}

function ladoAleatorio()
{
    var classe = Math.floor(Math.random() * 2)
    
    if(classe == 0)
    {
        return 'ladoA'
    }
    else if(classe == 1)
    {
        return 'ladoB'
    }
}

ajustaTamanhoJogo()
var cronometro = setInterval(function()
{
    tempo -= 1
    if(tempo < 0)
    {
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = 'vitoria.html'
    }
    else
    {
    document.getElementById('cronometro').innerHTML = tempo
    }

}, 1000)

