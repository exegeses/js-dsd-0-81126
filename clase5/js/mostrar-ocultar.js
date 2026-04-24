// ubicar elementos dentro del DOM
const caja = document.querySelector('#caja');
// const btnOcultar = document.querySelector('#btnOcultar');
// const btnMostrar = document.querySelector('#btnMostrar');
const btnInterruptor = document.querySelector('#btnInterruptor');


// declaramos funciones de control
function ocultarCaja() {
    //caja.style.display = 'none';
    caja.style.opacity = 0;
}
function mostrarCaja() {
    //caja.style.display = 'block';
    caja.style.opacity = 1;
}

// asignamos eventos a los botones
/* 
btnOcultar.onclick = function() {
    ocultarCaja();
}
btnMostrar.onclick = function() {
    mostrarCaja();
}
*/

btnInterruptor.onclick = function() {
    // si la caja se ve : ocultarla
    if ( caja.style.opacity == 1 ) {
        ocultarCaja();
    } else {
        mostrarCaja();
    } 
}
