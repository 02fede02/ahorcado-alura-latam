const width = window.innerWidth * 0.65
const height = window.innerHeight * 0.75

function cargandoPagina(){
    const screen = document.querySelector(".ahorcado")
    screen.width = width
    screen.height = height
    const pincel = screen.getContext("2d")
    
    pincel.lineWidth = screen.width * 0.01
    pincel.linecap = "round"
    pincel.lineJoin = "round"
    pincel.fillStyle = "#F3F5F6"
    pincel.strokeStyle = "#0A3871"
 
    pincel.beginPath()
    pincel.moveTo(width * 0.4, height * 0.5)
    pincel.lineTo(width * 0.7, height * 0.5)
    pincel.stroke()
    
    dibujarLinea()
 }

 function dibujarLinea(){
    const screen = document.querySelector(".ahorcado")
    const pincel = screen.getContext("2d")
    pincel.lineWidth = screen.width * 0.005
    pincel.lineCap = "round"
    pincel.lineJoin = "round"
    pincel.fillStyle = "#F3F5F6"
    pincel.strokeStyle = "#0A3871"
    const ancho = screen.width * 0.5 / palabra.length

    for(let i = 0; i < palabra.length; i++){
        pincel.moveTo(width * 0.3 + (ancho * i) , 640)
        pincel.lineTo(width * 0.35 + (ancho * i), 640)
    }

    pincel.stroke()
    
}

function dibujarLetra(letrasPintar, letrasUsuario){
    const screen = document.querySelector(".ahorcado")
    const pincel = screen.getContext("2d")
    const ancho = width * 0.5 / palabra.length

    letrasPintar.map(indice => {
        pincel.lineWidth = screen.width * 0.005
        pincel.fillStyle = "#0A3871"
        pincel.font = screen.width * 0.004 + "rem Arial"
        pincel.fillText(letrasUsuario.toUpperCase(), width * 0.3 + (ancho * indice), 620)

    })
}

function mensajeGanaste(){
    const screen = document.querySelector(".ahorcado")
    const pincel = screen.getContext("2d")
    pincel.fillStyle = "green"
    pincel.font = screen.width * 0.004 + "rem Arial"
    pincel.fillText("  Ganaste" ,width * 0.65 ,height * 0.25)
    pincel.fillText("Felicidades!", width * 0.65, height * 0.20)
    
    document.removeEventListener("keydown", captandoTeclado)
}

function mensajeFinDelJuego(){
    const screen = document.querySelector(".ahorcado")
    const pincel = screen.getContext("2d")
    pincel.font = screen.width * 0.0036 + "rem Arial"
    pincel.fillStyle = "red"
    pincel.fillText("Fin del juego!" ,width * 0.65 ,height * 0.25)

    document.removeEventListener("keydown", captandoTeclado)
}

function dibujarLineaVertical(){
    const screen = document.querySelector(".ahorcado")
    const pincel = screen.getContext("2d")
    pincel.lineWidth = screen.width * 0.005
    pincel.linecap = "round"
    pincel.lineJoin = "round"
    pincel.fillStyle = "#F3F5F6"
    pincel.strokeStyle = "#0A3871"
    pincel.beginPath()
    pincel.moveTo(width * 0.5, height * 0.5)
    pincel.lineTo(width * 0.5, height * 0.2)
    pincel.stroke()
    pincel.closePath()
}

function dibujarLineaHorizontal1(){
    const screen = document.querySelector(".ahorcado")
    const pincel = screen.getContext("2d")
    pincel.lineWidth = screen.width * 0.005
    pincel.linecap = "round"
    pincel.lineJoin = "round"
    pincel.fillStyle = "#F3F5F6"
    pincel.strokeStyle = "#0A3871"
    pincel.beginPath()
    pincel.moveTo(width * 0.5, height * 0.2)
    pincel.lineTo(width * 0.6, height * 0.2)
    pincel.stroke()
    pincel.closePath()
}

function dibujarLineaVertical2(){
    const screen = document.querySelector(".ahorcado")
    const pincel = screen.getContext("2d")
    pincel.lineWidth = screen.width * 0.005
    pincel.linecap = "round"
    pincel.lineJoin = "round"
    pincel.fillStyle = "#F3F5F6"
    pincel.strokeStyle = "#0A3871"
    pincel.beginPath()
    pincel.moveTo(width * 0.6, height * 0.2)
    pincel.lineTo(width * 0.6, height * 0.25)
    pincel.stroke()
    pincel.closePath()
}

function dibujarCabeza(){
    const screen = document.querySelector(".ahorcado")
    const pincel = screen.getContext("2d")
    pincel.lineWidth = screen.width * 0.005
    pincel.linecap = "round"
    pincel.lineJoin = "round"
    pincel.fillStyle = "#F3F5F6"
    pincel.strokeStyle = "#0A3871"
    pincel.beginPath()
    pincel.arc(width * 0.6, height * 0.25 + 20, 18, 0, 2*3.14)
    pincel.stroke()
}

function dibujarCuerpo(){
    const screen = document.querySelector(".ahorcado")
    const pincel = screen.getContext("2d")
    pincel.lineWidth = screen.width * 0.005
    pincel.linecap = "round"
    pincel.lineJoin = "round"
    pincel.fillStyle = "#F3F5F6"
    pincel.strokeStyle = "#0A3871"
    pincel.beginPath()
    pincel.moveTo(width * 0.6, height * 0.25 + 40)
    pincel.lineTo(width * 0.6, height * 0.4)
    pincel.stroke()
    pincel.closePath()
}

function dibujarBrazoIzquierdo(){
    const screen = document.querySelector(".ahorcado")
    const pincel = screen.getContext("2d")
    pincel.lineWidth = screen.width * 0.005
    pincel.linecap = "round"
    pincel.lineJoin = "round"
    pincel.fillStyle = "#F3F5F6"
    pincel.strokeStyle = "#0A3871"
    pincel.beginPath()
    pincel.moveTo(width * 0.6, height * 0.25 + 40)
    pincel.lineTo(width * 0.57, height * 0.36)
    pincel.stroke()
    pincel.closePath()
}

function dibujarBrazoDerecho(){
    const screen = document.querySelector(".ahorcado")
    const pincel = screen.getContext("2d")
    pincel.lineWidth = screen.width * 0.005
    pincel.linecap = "round"
    pincel.lineJoin = "round"
    pincel.fillStyle = "#F3F5F6"
    pincel.strokeStyle = "#0A3871"
    pincel.beginPath()
    pincel.moveTo(width * 0.6, height * 0.25 + 40)
    pincel.lineTo(width * 0.63, height * 0.36)
    pincel.stroke()
    pincel.closePath()
}

function dibujarPiernaIzquierda(){
    const screen = document.querySelector(".ahorcado")
    const pincel = screen.getContext("2d")
    pincel.lineWidth = screen.width * 0.005
    pincel.linecap = "round"
    pincel.lineJoin = "round"
    pincel.fillStyle = "#F3F5F6"
    pincel.strokeStyle = "#0A3871"
    pincel.beginPath()
    pincel.moveTo(width * 0.6, height * 0.4)
    pincel.lineTo(width * 0.57, height * 0.44)
    pincel.stroke()
    pincel.closePath()
}

function dibujarPiernaDerecha(){
    const screen = document.querySelector(".ahorcado")
    const pincel = screen.getContext("2d")
    pincel.lineWidth = screen.width * 0.005
    pincel.linecap = "round"
    pincel.lineJoin = "round"
    pincel.fillStyle = "#F3F5F6"
    pincel.strokeStyle = "#0A3871"
    pincel.beginPath()
    pincel.moveTo(width * 0.6, height * 0.4)
    pincel.lineTo(width * 0.63, height * 0.44)
    pincel.stroke()
    pincel.closePath()
}