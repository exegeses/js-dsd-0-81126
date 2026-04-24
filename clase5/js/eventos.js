// ubicar elementos dentro del documento
const contenedor = document.querySelector('#contenedor');

// agregar un evento al elemento 
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

contenedor.ondblclick = function()
    {
        contenedor.textContent = 'Haz hecho doble click en el contenedor'; 
    }
    
contenedor.oncontextmenu = function()
    {
        contenedor.textContent = 'Haz hecho click derecho en el contenedor'; 
    }
