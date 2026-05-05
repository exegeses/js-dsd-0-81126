const css = document.querySelector('#css') // hoja de estilos
const btnSwitch = document.querySelector('#switch') //boton
/*
    flag: es una variable auxiliar que va a tomar únicamente dos valores
          El objetivo es que esta variable pueda controlar nuestro código
          También nuestro código va a cambiar el valor del Flag
*/
let tema = 'oscuro'
/*
    Si nuestro flag tiene 'oscuro' => cambiar a tema claro
    Si nuestro flag tiene 'claro' => cambiar a tema oscuro
*/

btnSwitch.onclick = function()
{
    if( tema == 'oscuro' ){
        css.href = 'css/light.css'
        tema = 'claro'
    }
    else{
        css.href = 'css/dark.css'
        tema = 'oscuro'
    }
}
