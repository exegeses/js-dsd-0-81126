// ubicar elementos dentro del doncumento
const caja = document.querySelector('#caja');

// declarar funciones para modificar elemento
function pintarNaranja()
{
    // cambiar el color de fondo del elemento
    caja.style.backgroundColor = 'hsl(30, 100%, 50%)';
    //cambiar texto del elemento
    caja.textContent = 'Naranja';
    // rotar el elemento
    caja.style.rotate = '20deg';
}
function pintarVerde()
{
    caja.style.backgroundColor = 'hsl(120, 100%, 50%)';
    caja.textContent = 'Verde';
    caja.style.rotate = '0deg';
}
function pintarCeleste()
{
    caja.style.backgroundColor = 'hsl(180, 100%, 50%)';
    caja.textContent = 'Celeste';
    caja.style.rotate = '-30deg';
}