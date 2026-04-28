// ubicamos elementos dentro del DOM
const navbar = document.querySelector('#navbar')
const contenedor = document.querySelector('#contenedor')

console.log(navbar)
console.log(navbar.children)

// accedemos a los hijos del navbar
const boton1 = navbar.children[0]
const boton2 = navbar.children[1]
const boton3 = navbar.children[2]

// escribimos dentro del párrafo
contenedor.textContent = 'ningún botón ha sido pulsado'

boton1.onclick = function() {
    contenedor.textContent = 'botón 1 pulsado'
}
boton2.onclick = function() {
    contenedor.textContent = 'botón 2 pulsado'
}
boton3.onclick = function() {
    contenedor.textContent = 'botón 3 pulsado'
}