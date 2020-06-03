

/*
    ---------------
        MODULOS 
    -----------------
*/

/*
    Math.random
    - Cuando buscamos algo aleatorio
    - nos devuelve un numero entre el 0 y 1 
*/
Math.random()

const numMax = 18;
const numMin = 1;

/*
    round nos redondea el numero 
*/
const numRandom =() => Math.random(Math.random()*(numMax-numMin)+numMin);
// redondeand los decimales que nos devuelve el Math.round

// llamamos a la function
numRandom();






/*
    ---------------
        LINEAS DE ACCION
    -----------------
*/



/*
    --------------------------
        Tiene dos lineas de accion
            - Nivel puro HTML y CSS
            - y segundo hacer una calculadora

        - JavaScript apoyando al dinamismo de HTML y class

    ------------------------------
*/


/*
    ---------------
        DOM
    -----------------
*/



/*
    -Maneras de acceder al DOM 
    - Acceder a etiquetas de HTML
        -Base
        - Objeto.metodo('siempre entre comilla')
        Ejemplo 
        - Objeto(document).metodo(' id o array')
    
    - Los 4 accesos (quiero guardar,archivar,etc.) para manipular la informacion son
        -document.getElementById('')
        -document.getElementsByTagName('')
        -document. ('')
        -document. ('')
*/

// Yo quiero acceder a la cabecera
// para acceder a la cabecera tengo que ver que objeto me puede ayudar para entrar a la cabecera
// y ese objeto es document
var cabecera = document.gerElementById('cabecera');



/*
    Esto es tema de gustos
        - 
    - un id no se puede repetir, es un premio facil 0
    -Solo puede haber un representacion de un ID en toda la pagina 
    */

var caja = document.getElementsByTagName('');

