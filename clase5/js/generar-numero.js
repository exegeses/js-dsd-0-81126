/*
    Al hacer click en el botón vamos a generar un número aleatorio 
    que queremos mostrar dentro del span
*/

const boton = document.querySelector('#boton')
const contenedor = document.querySelector('#contenedor')

boton.onclick = function() {
    let numero = Math.random()
    let numeroX10 = numero * 10
    let numeroMas1 = numeroX10 + 1
    let numeroEntero = Math.floor(numeroMas1)  
    contenedor.textContent = numeroEntero
}