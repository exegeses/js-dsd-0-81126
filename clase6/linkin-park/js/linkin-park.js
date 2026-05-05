const hero = document.querySelector('#hero img')
const minis = document.querySelector('#minis')

const btn1 = minis.children[0]
const btn2 = minis.children[1]
const btn3 = minis.children[2]
const btn4 = minis.children[3]
const btn5 = minis.children[4]
const btn6 = minis.children[5]

function cambiarImagen(nuevaImagen)
{
    hero.src = nuevaImagen
}

btn1.onclick = function()
{
    cambiarImagen('imgs/ms.jpg')
}
btn2.onclick = function()
{
    cambiarImagen('imgs/jh.jpg')
}
btn3.onclick = function()
{
    cambiarImagen('imgs/chester.jpg')
}
btn4.onclick = function()
{
    cambiarImagen('imgs/rb.jpg')
}
btn5.onclick = function()
{
    cambiarImagen('imgs/bd.jpg')
}
btn6.onclick = function()
{
    cambiarImagen('imgs/df.jpg')
}
