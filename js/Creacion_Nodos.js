/*
    Creacion de elementos HTML a traves del DOM 
        - Crear nodo de tipo de Elemento
        - 

*/


// Crear nodo de tipo de Elemento
var parrafo = document.createElement('p');


//Crear nodo de tipo Text 
var contenido = document.createTextNode('Hola Mundo');


//Añadir el nodo Text como hijo del nodo Element 
parrafo.appendChild(contenido);



//Añadir el nodo Element como hijo del Document (pagina)

document.body.appendChild(parrafo);





/*
    Eliminacion de NODOS
        - 
*/


//VOY A llamar a x-nodo para eliminarlo

var boton = document.getElementById('boton');

/*
    Directa
    -Instruccion basica para eliminar
    -Elimina este hijo y este hijo se llama
*/
boton.removeChild(boton);

/*
    -otra instruccion 
    -Instruccion basica para eliminar
    -Elimina este hijo y este hijo se llama
*/
boton.parentNode.removeChild(boton);