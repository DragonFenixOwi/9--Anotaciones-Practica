
/* 
    -------------------------------
        Author : Osvaldo Aquino
        NickName: Owi
        CONECTAR CON EL DOM
    -------------------------------
*/


/* 
    --------------------------------
        CONTACTAR CON EL DOM
    --------------------------------
*/


//Basico de contactar con NODOS  del DOM

//Titulo 

var h1=document.getElementById('titulo');
console.log(h1);

// solo quiero el texto
console.log(h1.innerHTML);

//es mucho mas explicito
console.log(h1.textContent);



/* 
    -----------------
        MODIFICAR
    -----------------
*/
//asi se manipula el HTML desde JavaScript
// modificar el HTML
h1.innerHTML = 'Nuevo Titulo'; 



// modificar class
//utilizamos el mismo objeto "h1"

// cuando se utiliza un dato se utiliza Esto
// esto es 1 por 1
h1.style.color='red';

// quiero modificar otra cosa
h1.style.fontFamily = 'serif';




// otro
h1.style = "color: blue; fon-family: serif;"




// PARRAFO
var parrafo = document.getElementById("parrafo");
console.log(parrafo);

parrafo.style.color ="gren";
parrafo.style.width = "200px";


/* 
    --------------
        EVENTO
    --------------
*/


/*
    EVENTO
        -Por una accion externa del usuario, hacemos un cambio
        - NOOOOOOOOOOOOOOOOOOO  alos eventos de HTML
            - Siglo pasado: 
        - lo que se hace de evento se hace en JavaScript

*/


var boton = document.getElementById("boton");
console.log(boton);

// // ¿como sabemos si alguien clickea el boton?
//     - ¿que evento esta escuchando? clickea
//     - y que tengo que hacer si ocurre, pues te lo digo con una funcion
// boton.addEventListerner("click", fucntion ()
//     {
//         h1.style.color = "#21a8aa";
//         parrafo.style.color ='gren';
//     });


/*
    VARIOS eventos
        -dinamismo atraves de eventos que genera el usuario
*/


boton.addEventListerner("mouseout",function ()
            {
                h1.innerHTML = "SALIR";
                boton.style.width= "100px";
                parrafo.style.color = "#000";
            });

//
boton.addEventListerner("mouseover",function ()
            {
                h1.innerHTML = "ENTRAR";
                boton.style.width= "100%";
            });


boton.addEventListerner("click",function ()
            {
                parrafo.style.color = "#21a8aa";
            });




//sumar

/*
    Aqui  recogemos toda la informacion en modo de  
*/
var suma01 = document.getElementById("sum01");
var suma02 = document.getElementById("sum02");

var btn_submit = document.getElementById("submit");
var total_final = document.getElementById("total_final");


btn_submit.addEventListener("click",function()
    {
        //no sacamos el texto sacamos los valores
        var total = Number(suma01.value) + Number(suma02.value);
        total_final.innerHTML = total; 
    })



    
