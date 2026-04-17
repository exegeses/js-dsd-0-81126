/*
    Vamos a controlar el elemento <span> que tenemos en el HTML
    Ahí vamos a mostrar la fecha actual con el formato
    dd/mm/yyyy
*/
const spanFecha = document.querySelector('#contenedor'); 

// creamos un objeto de fecha
const fecha = new Date();
console.log(fecha)


// obtener el número de día de mes
let diaMes = fecha.getDate(); // devuelve el número del día del mes
if (diaMes < 10) {
    // concatenamos cero inicial
    diaMes = '0' + diaMes
}
console.log('Día del mes: ', diaMes);
// obtener el número del mes actual
let mes = fecha.getMonth() + 1
if (mes < 10) {
    // concatenamos cero inicial
    mes = '0' + mes
}

console.log('Número del mes: ', mes);
// obtener el año actual
const anio = fecha.getFullYear();
console.log('Año: ', anio);


// mostramos el número del día del mes en el span
spanFecha.textContent = diaMes + '/' + mes + '/' + anio; 
