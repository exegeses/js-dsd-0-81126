const contenedor = document.querySelector('#contenedor')
const imagen = contenedor.children[0]

// cuando pongamos el Mouse sobre la imagen queremos que cambie
imagen.onmouseover = function() {
    imagen.src = 'imgs/girl2.png'
}
// cuando quitemos el Mouse de la imagen queremos que vuelva a la original
imagen.onmouseout = function() {
    imagen.src = 'imgs/girl1.png'   
}
