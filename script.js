// Informação sobre o dia
var dia = new Date()
var dmes = dia.getDate()
var dsem = dia.getDay()
var m = dia.getMonth()
var a = dia.getFullYear()

// Arrays para trasnformar números da data em texto correspondente
dayName = new Array ("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado")
monName = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "outubro", "novembro", "dezembro")

var atual = window.document.getElementById('hoje')

    if (dsem >= 1 && dsem <= 5) { 
        atual.innerText = ("Hoje é " + dayName[dsem]+"-feira, " + dmes +" de " + monName[m] + " de " + a +"")
    } else {
        atual.innerText = ("Hoje é " + dayName[dsem]+", " + dmes +" de " + monName[m] + " de " + a +"")
    }

// funcionamento do relógio
function relogio(){
    var data = new Date()
    var hor = data.getHours()
    var min = data.getMinutes()
    var seg = data.getSeconds()

    // acrescentando o 0 na hora, minuto e segundo para ficar padronizado. ex.: 01:01:01 
    if (hor < 10) { hor = "0"+hor }
    if (min < 10) { min = "0"+min }
    if (seg < 10) { seg = "0"+seg }
    
    // formatando o relógio e o entregando a uma variável
    var horas = `${hor}:${min}:${seg}`
    document.getElementById('rel').value = horas

    // defindo o intervalo de busca da hora (função, milisegundos)
    var tempo = setInterval(relogio, 1000)


    var msg = window.document.getElementById('rel')
    var img = window.document.getElementById('imagem')
    var titulo = window.document.getElementById('titulo')
    var texto = window.document.getElementById('texto')
    var footer = window.document.getElementById('footer')
    rel.innerHTML = `${horas}`
    
    if (hor >= 00 && hor < 12) {
        // Bom dia
        img.src = './manha.png'
        document.body.style.background = '#FFD700'
        texto.style.color = '#008080'
        texto.innerText = "Tenha um ótimo dia!"
    } else if (hor >= 12 && hor < 18) {
        // Boa tarde
        img.src = './tarde.png'
        document.body.style.background = '#f1f1f1'
        texto.innerText = "Tenha uma ótima tarde!"
    } else {
        // Boa noite
        img.src = './noite.png'
        document.body.style.background = '#317f80'
        texto.style.color = '#008080'
        titulo.style.color = '#fff'
        footer.style.color = '#fff'
        texto.innerText = "Tenha uma ótima noite!"
        
    }

}