// 📚 ubicamos elementos dentro del DOM
// const contenedor = document.getElementById("contenedor");
const contenedor = document.querySelector("#contenedor");
/*
    - hacer una pregunta al usuario
        prompt('qué seleccionado ganó la copa del mundo Qatar 2022')
        - el usuario responde
        - almacenar la respuesta en memoria
        - mostrar la respuesta dentro del span
*/
let respuesta = prompt('qué seleccionado ganó la copa del mundo Qatar 2022')
// contenedor.textContent = respuesta;

/* 📚 condicionales
    Vamos a comparar la respuesta que nos da el usuario con la respuesta correcta, que es "Argentina"
        - si la respuesta es correcta, mostrar un mensaje que diga CORRECTO!
        - si la respuesta es incorrecta, mostrar un mensaje que diga INCORRECTO!
*/
if( respuesta.toUpperCase() == 'ARGENTINA' ){
    contenedor.textContent = 'CORRECTO!'
} 
else {
    contenedor.textContent = 'INCORRECTO!'
}
//  toUpperCase() -> convierte un string a mayúsculas
//  toLowerCase() -> convierte un string a minúsculas
