const btnAgregarPalabra = document.getElementById("agregar-palabra")
const btnIniciarJuego = document.getElementById("iniciar-juego")
const main = document.querySelector('main')

const palabras = ['lavanda', 'romero', 'azarero', 'geranio', 'malvon']
let palabra, letraUsuario
let letrasUsuario = []
let contador = 0
let aciertos = 0

btnAgregarPalabra.onclick = agregarPalabra
btnIniciarJuego.onclick = nuevoJuego

function cancelar() {
    //Volver a agregar al main los botones principales
    main.appendChild(btnIniciarJuego)
    btnIniciarJuego.style.display= 'block'
    main.appendChild(btnAgregarPalabra)
    btnAgregarPalabra.style.display= 'block'

    //Ocultar todos los elementos agregados
    document.getElementById('cancelar').style.display = 'none'
    document.getElementById('ingresar-palabra').style.display = 'none'
    document.getElementById('guardar-empezar').style.display = 'none'
    document.querySelector('.condicion-palabra').style.display = 'none'
}

function guardar(){
    const ingresarPalabra = document.getElementById("ingresar-palabra")
    const guardarEmpezar = document.getElementById("guardar-empezar")
    ingresarPalabra.style.color = "red"
    let str = ingresarPalabra.value.toLowerCase() 

    if(!/[a-z]/.test(str) || str.match(/[^a-z]/)){
        ingresarPalabra.value = "Ingrese una palabra"
        setTimeout(() => {
            ingresarPalabra.style.color = "#0A3871"
            ingresarPalabra.value = ""
            ingresarPalabra.focus()
        }, 2000);
        return
    } else if(str.length > 8){
        ingresarPalabra.value = 'Maximo 8 letras'
        setTimeout(() => {
            ingresarPalabra.style.color = "#0A3871"
            ingresarPalabra.value = ''
            ingresarPalabra.focus()
        }, 2000);
        return
    }
    else if(palabras.includes(str)){
        ingresarPalabra.value = `${str} ya fue agregada!`
        setTimeout(() => {
            ingresarPalabra.style.color = "#0A3871"
            ingresarPalabra.value = ''
            ingresarPalabra.focus()
        }, 2000);
        return

    } else{
        palabras.push(str)
    }

    cancelar()

}

function desistir(){
    reset()
    //Volver a agregar al main los botones principales
    main.appendChild(btnIniciarJuego)
    btnIniciarJuego.style.display= 'block'
    main.appendChild(btnAgregarPalabra)
    btnAgregarPalabra.style.display= 'block'

    //Ocultar todos los elementos agregados
    document.querySelector('.juego-display').style.display = 'none'
    
    document.removeEventListener("keydown", captandoTeclado)
}

function nuevoJuego(){
    reset()

    // Ocultando los botones
    btnIniciarJuego.style.display = 'none'
    btnAgregarPalabra.style.display = 'none'

    //AGREGAR ELEMENTOS    CANVAS ORIGINAL W=900 H=500 // LO PONGO OCMO LO HICIERON LOS PROFES PARA PROBAR
    main.innerHTML = "<div class='juego-display'><canvas class='ahorcado' width='800' height='800'></canvas> <p class='letras-equivocadas juego-display-p'></p> <div class='juego-display-botones'><button id='nuevo-juego'>Nuevo juego</button><button id='desistir'>Desistir</button></div></div>"

   //Generar palabra al azar
   palabra = palabras[Math.floor(Math.random()*palabras.length)]

   //Agregar palabra a adivinar con span par subrayar debajo cada letra, despues vemos de ocultarlas e ir desbloqueando de a poco 
//    for(let i = 0; i < palabra.length; i++){
//        document.querySelector('.palabra-mostrar').innerHTML += `<span class='letra ${palabra[i]}'>${palabra[i].toUpperCase()}</span>`
//    }
    
   //Creando linea inferior que siempre aparece visible al iniciar el juego
    cargandoPagina()
    // window.onresize = function(){
    //     cargandoPagina()
    //     console.log("funcion")
    // }
   //Version con alura profes
   
   //Como yo lo tenia
//    pincel.fillStyle = "#0A3871"
//    pincel.fillRect(325, 450, 250, 4)

   document.addEventListener("keydown", captandoTeclado)
   document.getElementById('desistir').onclick = desistir
   document.getElementById("nuevo-juego").onclick = nuevoJuego
}

function agregarPalabra(){
    // Ocultando los botones
    btnIniciarJuego.style.display = 'none'
    btnAgregarPalabra.style.display = 'none'

    //Agregando input para ingresar palabra y dos nuevos botones
    main.innerHTML = "<textarea id='ingresar-palabra' name='palabra' value='palabra'  placeholder='Ingrese una palabra' rows='10' cols='30' required></textarea> <p class='condicion-palabra'><img src='./img/error.svg' alt='icono error'> Max. 8 letras </p> <button id='guardar-empezar'>Guardar y empezar </button> <button id='cancelar'>Cancelar</button>"

    const ingresarPalabra = document.getElementById("ingresar-palabra")
    ingresarPalabra.focus()

    document.getElementById('cancelar').onclick = cancelar
    const palabra = ingresarPalabra.value
    // document.getElementById('guardar-empezar').onclick = guardar
    const guardarEmpezar = document.getElementById('guardar-empezar')
    document.getElementById('guardar-empezar').addEventListener("click", guardar)

    document.removeEventListener("keydown", captandoTeclado)
}

function captandoTeclado(e){
        if(!/[a-z]/.test(e.key) || e.key.length > 1){
            return
        } 

        const palabraArr = palabra.split("")
        letraUsuario = e.key

        if(palabraArr.includes(letraUsuario) && !letrasUsuario.includes(letraUsuario)){
            letrasUsuario.push(letraUsuario)
          
            //PASANDO LETRA QUE HAY QUE PINTAR EN EL CANVAS
            const letrasPintar = []
            for(let i = 0; i < palabra.length; i++){
                if(palabraArr[i].includes(letraUsuario)){
                    letrasPintar.push(i)
                }
            }
            aciertos += letrasPintar.length
            dibujarLetra(letrasPintar, letraUsuario)

            if(aciertos === palabra.length){
                mensajeGanaste()
            } 

        } else if(!palabraArr.includes(letraUsuario) && !letrasUsuario.includes(letraUsuario)){
            letrasUsuario.push(letraUsuario)
            document.querySelector(".letras-equivocadas").innerText += letraUsuario.toUpperCase()
            dibujarMuneco()
            contador++   
        }
}

function reset(){
    letrasUsuario = []
    letraUsuario = ''
    contador = 0
    aciertos = 0
}

function dibujarMuneco(){
    switch (contador) {
        case 0:
            dibujarLineaVertical()
            // pincel.fillRect(420, 450, 1.75, -250)
            break
        case 1:
            dibujarLineaHorizontal1()
            break
        case 2:
            dibujarLineaVertical2()
            break
        case 3:
            dibujarCabeza()
            break
        case 4:
            dibujarCuerpo()
            // pincel.beginPath()
            // pincel.moveTo(520, 280)
            // pincel.lineTo(520, 350)
            // pincel.stroke()
            // pincel.fillRect(520, 65, 1.5, 35)
            break
        case 5:
            dibujarBrazoIzquierdo()
            // pincel.beginPath()
            // pincel.strokeStyle = "#0A3871"
            // pincel.moveTo(520, 280)
            // pincel.lineTo(490, 320)
            // pincel.stroke()
            break
        case 6:
            dibujarBrazoDerecho()
            // pincel.beginPath()
            // pincel.moveTo(520, 280)
            // pincel.lineTo(550, 320)
            // pincel.stroke()
            break
        case 7:
            dibujarPiernaIzquierda()
            // pincel.beginPath()
            // pincel.moveTo(520, 350)
            // pincel.lineTo(490, 390)
            // pincel.stroke()
            break
        case 8:
            dibujarPiernaDerecha()
            // pincel.beginPath()
            // pincel.moveTo(520, 350)
            // pincel.lineTo(550, 390)
            // pincel.stroke()

            //Agregar mensaje a mostrar
            mensajeFinDelJuego()
            break
        default:
            break;
    }
}

