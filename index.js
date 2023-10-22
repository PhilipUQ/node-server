
const readlineSync = require("readline-sync") // importamos readline-sync para trabajar el menu y poderseleccionar las funciones en la consola


// la lista de tareas como un array de objetos, agrege algunas tareas prediseñadas
let arrayListaTareas = [

  {id: 1, descripcion: "tomar 200 listros de agua", estado: "no completada"}, 

  {id: 2, descripcion: "camirar 232999993 km", estado: "no completada"},

  {id: 3, descripcion: "sacar a pasear al gato", estado: "no completada"}


];





// funcion para imprimir la lista de tareas en la consola

const mostrarTareas = () => {

  console.log("------ lista de tareas ------");

  for (let tarea of arrayListaTareas) {

    console.log(`tarea id: ${tarea.id}, descripcion: ${tarea.descripcion}, estado: ${tarea.estado}`);


  }

  console.log("-----------------------------------"); // separadores para mejor visualizacion en la consola

  console.log(`numero total de tareas: ${arrayListaTareas.length}`); // se imprime el numero total de tareas

  console.log("-----------------------------------");


};






// funcion para agregar uan nueva tarea, retornando una promesa

const agregarTarea = () => {

  return new Promise((resolve, reject) => {

    //setTimeout(() => {

    let nuevaDescripcion = readlineSync.question("introduce la descripcion de la tarea: ")


  arrayListaTareas.push ({

    id: arrayListaTareas.length + 1,

    descripcion: nuevaDescripcion,

    estado: "no completada"


  });


  resolve(`se agrego la tarea: ${nuevaDescripcion}`);


  //}, 2000); // espera 2 segundos para resolver la promesa



  }); 

  

};






//funcion para eliminar tareas, retornando una promesa


const eliminarTarea = () => {

  //setTimeout(() => {

  return new Promise((resolve, reject) => {


    let tareaId = arrayListaTareas.map(tarea => tarea.id.toString()); 

  let indice = readlineSync.keyInSelect(tareaId, "selecciona la tarea que quieres eliminar");


  if (indice >= 0) {


    arrayListaTareas.splice(indice, 1);

    resolve(`la tarea ${arrayListaTareas[indice].id} fue eliminada`);


  } else {

    reject(`error al eliminar la tarea`);


  }

  //}, 2000); // espera 2 segundos para resolver la promesa



  });

  

};






// funcion cambiar el estado de las tareas, retornando una promesa

const tareaYaCompletada = () => {

  return new Promise((resolve, reject) => {

  //setTimeout(() => {

  let tareaId = arrayListaTareas.map(tarea => tarea.id.toString()); 

  let indice = readlineSync.keyInSelect(tareaId, "selecciona la tarea que quieres completar");


  if (indice >= 0) {

    arrayListaTareas[indice].estado = "completada";


    resolve(`Tarea ${arrayListaTareas[indice].id} completada`);


  } else {

    reject(`error al completar la tarea`);

  }
  

  //}, 2000); // espera 2 segundos para resolver la promesa

});



};







/* // implementacion del menu con readline-sync usando metodo async & await


const menuConsola = async () => {


  while (true) {

    const opciones = ["mostrar", "agregar", "eliminar", "completar", "salir"];
  
    let indice = readlineSync.keyInSelect(opciones, "elige una opcion: ");

    try {

      
    if (indice === 0) {
  
      console.log("selecionaste la opcion mostrar");
  
      mostrarTareas();
  
  
    } else if (indice === 1) {
  
      console.log("selecionaste la opcion agregar");
  
      await agregarTarea();

  
  
    } else if (indice === 2) {
  
      console.log("selecionaste la opcion eliminar");
  
      await eliminarTarea();

  
  
    } else if (indice === 3) {
  
      console.log("selecionaste la opcion completar");
  
      await tareaYaCompletada();

      console.log(asincrono);
  
  
    } else if (indice === 4) {
  
      console.log("la aplicacion finalizo");
  
      break;
  
  
    } else {
  
      console.log("opcion cancelada o no reconocida");
  
  
    } 



    } catch (error) { 


      console.log("algo salio mal:", error)


    }
  
  
  
  
  
  
  }




  
};


menuConsola(); */




// implementacion del menu usando el metodo then()



const menuConsola = () => {


  while (true) {

    const opciones = ["mostrar", "agregar", "eliminar", "completar", "salir"];
  
    let indice = readlineSync.keyInSelect(opciones, "elige una opcion: ");

    

      
    if (indice === 0) {
  
      console.log("selecionaste la opcion mostrar");
  
      mostrarTareas();
  
  
    } else if (indice === 1) {
  
      console.log("selecionaste la opcion agregar");
  
      agregarTarea().then(() => {

        console.log("la tarea se termino de agregar");

      });

  
  
    } else if (indice === 2) {
  
      console.log("selecionaste la opcion eliminar");
  
      eliminarTarea().then(() => {

        console.log("la tarea termino de eliminarse");


      });

  
  
    } else if (indice === 3) {
  
      console.log("selecionaste la opcion completar");
  
      tareaYaCompletada().then(() => {

        console.log("la tarea se termino de completarse");

      });

      
  
  
    } else if (indice === 4) {
  
      console.log("la aplicacion finalizo");
  
      break;
  
  
    } else {
  
      console.log("opcion cancelada o no reconocida");
  
  
    } 




    }
  

  
  
  
  };




menuConsola();




//---------------------- metodo de uso -----------------------------------

// se inicia la aplicacion tipeando en la consola: npm run start

// se selecciona la funcion que se desea ejecutar

