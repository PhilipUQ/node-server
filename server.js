

const http = require('http'); //se requiere el modulo http para crear el server

const fs = require('fs'); //se requiere el modulo fs para leer el archivo listaTareasArray.json

const host = '127.0.0.1' // se define el host del servidor

const port = 3000 // se define el puerto del servidor



// se crea el servidor http, definiendo listaDeTareas como una variable let que sostiene la el archivo .json

const server = http.createServer((req, res) => {

  let listaDeTareas;



//se usa try and catch para manejar los errores en caso de que no se pueda leer la lista de tareas .json

  try {


    listaDeTareas = JSON.parse(fs.readFileSync('./listaTareasArray.json')); // se lee el archivo con fs 

    


  } catch (err) {

    console.error(err);

    res.statusCode = 404;

    res.end();



   

  }



  res.setHeader('Content-Type', 'application/json'); // aqui se define el content-type para indicar que se la respuesta es JSON






  
  try {
    
    res.end(JSON.stringify(listaDeTareas)); 

    
    
  } catch (error) {


    console.error(error);

    res.statusCode = 404;

    res.end();




  }

});



//se inicia el servidor en en host y puerto definido y comienza a escuchar las peticiones

server.listen (port, host, () => {

  console.log("servidor correindo en:", host, port)

  
});

//-------------------- metodo de uso ---------------------------

//inicia el servido usando el comando npm run start

// en postman o en un navegador introduce   =>  127.0.0.1:3000  <=  los cuales son el host y el puerto del servidor