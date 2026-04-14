/*
    - Pedimos al usuario que ingrese su nombre
    - una vez que el usuario ingresa su nombre 
            y pulsa el botón "Aceptar"
    - almacenamos ese dato en la variable nombre
    - escribimos el nombre del usuario en un párrafo
*/
// prompt() sirve para que un usuario ingrese un dato
let nombre = prompt('ingrese su nombre')
console.log('Nombre:',nombre)
document.getElementById('dato').textContent = nombre