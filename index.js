
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






// funcion para agregar uan nueva tarea

const agregarTarea = () => {

  let nuevaDescripcion = readlineSync.question("introduce la descripcion de la tarea: ")


  arrayListaTareas.push ({

    id: arrayListaTareas.length + 1,

    descripcion: nuevaDescripcion,

    estado: "no completada"


  });


  console.log(`se agrego la tarea: ${nuevaDescripcion}`);


};






//funcion para eliminar tareas


const eliminarTarea = () => {

  let tareaId = arrayListaTareas.map(tarea => tarea.id.toString()); 

  let indice = readlineSync.keyInSelect(tareaId, "selecciona la tarea que quieres eliminar");


  if (indice >= 0) {

    console.log(`la tarea ${arrayListaTareas[indice].id} fue eliminada`);

    arrayListaTareas.splice(indice, 1);


  }


};






// funcion cambiar el estado de las tareas

const tareaYaCompletada = () => {

  let tareaId = arrayListaTareas.map(tarea => tarea.id.toString()); 

  let indice = readlineSync.keyInSelect(tareaId, "selecciona la tarea que quieres completar");


  if (indice >= 0) {

    arrayListaTareas[indice].estado = "completada";

    console.log(`Tarea ${arrayListaTareas[indice].id} completada`);



  }



};







// implementacion del menu con readline-sync


while (true) {

  const opciones = ["mostrar", "agregar", "eliminar", "completar", "salir"];

  let indice = readlineSync.keyInSelect(opciones, "elige una opcion: ");



  if (indice === 0) {

    console.log("selecionaste la opcion mostrar");

    mostrarTareas();


  } else if (indice === 1) {

    console.log("selecionaste la opcion agregar");

    agregarTarea();


  } else if (indice === 2) {

    console.log("selecionaste la opcion eliminar");

    eliminarTarea();


  } else if (indice === 3) {

    console.log("selecionaste la opcion completar");

    tareaYaCompletada();


  } else if (indice === 4) {

    console.log("la aplicacion finalizo");

    break;


  } else {

    console.log("opcion cancelada o no reconocida");


  }



}




//---------------------- metodo de uso -----------------------------------

// se inicia la aplicacion tipeando en la consola: npm run start

// se selecciona la funcion que se desea ejecutar: 

// mostrar: imprimir la lista de tareas
// agregar: agregar una tarea
// eliminar: eliminar una tarea
// completar: cambiar el estado de la tarea
// salir: cerrar la aplicaion