// Ubicamos elementos dentro del DOM
// botones
const botones = document.querySelectorAll('#tyd nav a')
/*    console.log(botones)
    botones[0].onclick = function()
    {
        alert('hiciste click')
    } */
// escuderías
const mercedes = document.querySelector('#mercedes')
const ferrari = document.querySelector('#ferrari')
const mclaren = document.querySelector('#mclaren')
const redbull = document.querySelector('#redbull')
const alpine = document.querySelector('#alpine')

// ocultamos los contenedores de las escuderías
function ocultar()
{
    mercedes.style.display = 'none'
    ferrari.style.display = 'none'
    mclaren.style.display = 'none'
    redbull.style.display = 'none'
    alpine.style.display = 'none'
}
ocultar()
//mostramos escudería mercedes
mercedes.style.display = 'flex'

// interactividad
botones[0].onclick = function()
{
    ocultar()
    mercedes.style.display = 'flex'
}
botones[1].onclick = function()
{
    ocultar()
    ferrari.style.display = 'flex'
}
botones[2].onclick = function()
{
    ocultar()
    mclaren.style.display = 'flex'
}
botones[3].onclick = function()
{
    ocultar()
    redbull.style.display = 'flex'
}
botones[4].onclick = function()
{
    ocultar()
    alpine.style.display = 'flex'
}