
const API_URL= "https://swapi.dev/api/";        
const PERSONAJES_URL = "people/:id";           
const OPCIONES = {crossDomain: true};         







function perdirPersonaje (id,callback)
    {
        const URL = `${API_URL}${PERSONAJES_URL.replace(":id",id)}`; 
        $.get(URL, OPCIONES, function (personaje)
                                    {
                                        document.write(`Hola mi nombre es ${personaje.name}${"<br><br>"}`);
                                        if (callback)  
                                            {
                                                callback();
                                            }
                                    });
        
        
    }

//id =1,2,3,4,5
perdirPersonaje(1, function()
    {
        perdirPersonaje(2, function()
            {
                perdirPersonaje(3, function()
                    {
                        perdirPersonaje(4, function()
                        {
                            perdirPersonaje(5, function()
                                {
                                    perdirPersonaje(6, function()
                                        {
                                            perdirPersonaje(7, function()
                                        {
                                            
                                        })

                                        })

                                })

                        })

                    })

            })

    })

/*
    //peticion automatica - no es un callba
    perdirPersonaje(1,perdirPersonaje(2));
*/