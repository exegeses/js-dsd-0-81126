# Eventos en el archivo Javascript

> hasta ahora venimos escribiendo los eventos o controladores de eventos dentro del archivo html

    <a href="#!" onclick="pintarNaranja()">Naranja</a>
    <button onclick="document.body.style.backgroundColor = 'orange'">naranja</button>


    <elemento onclick="código javascript">

> pero también podemos escribir este código dentro de nuestro archivo JavaScript
> de esta manera podemos separar capas

> dentro del archivo HTML: solamente contenedores y contenido
> dentro del archivo CSS: solamente estética y presentación
> dentro del archivo JS: solamente interactividad y la lógica

## Sintaxis    

    selector.evento = function(){ código }

> Ejemplo práctico

    contenedor.onmouseover = function()
        {
            contenedor.textContent = 'El mouse esta sobre el contenedor'; 
        } 

    contenedor.onmouseout = function()
        {
            contenedor.textContent = 'El mouse esta fuera del contenedor'; 
        }    

    contenedor.onclick = function()
        {
            contenedor.textContent = 'Haz hecho click en el contenedor'; 
        }