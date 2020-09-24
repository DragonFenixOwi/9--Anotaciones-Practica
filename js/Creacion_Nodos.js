  
/* 
    --------------------------------------------
        Author : Osvaldo Aquino
        NickName: Owi
        cREACIÓN DE 
    --------------------------------------------
*/


/*
   - Creacion de elementos HTML a traves del DOM 
        - Crear nodo de tipo de Elemento.
*/


/* 
    --------------------------------
        CREAR NODO TIPO ELEMENTO
    --------------------------------
*/

// Crear nodo de tipo de Elemento
var parrafo = document.createElement('p');

/* 
    --------------------------------
        CREAR NODO TIPO TEXTO
    --------------------------------
*/

//Crear nodo de tipo Text 
var contenido = document.createTextNode('Hola Mundo');


/* 
    --------------------------------
        AÑADIR NODO COMO HIJO
    --------------------------------
*/

//Añadir el nodo Text como hijo del nodo Element 
parrafo.appendChild(contenido);



//Añadir el nodo Element como hijo del Document (pagina)

document.body.appendChild(parrafo);





/* 
    ----------------------------
        ELIMINACIÓN DE NODOS
    ----------------------------
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
