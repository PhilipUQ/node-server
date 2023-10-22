
  // se importamos la biblioteca readline para interactuar en la consola la funcion que se desea realizar

const readline = require('readline');

const rl = readline.createInterface({

  input: process.stdin,

  output: process.stdout


});





// la lista de tareas como un array de objetos, tiene tareas prediseñadas
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

const agregarTarea = (descripcion) => {


  const nuevaTarea = {

    id: arrayListaTareas.length + 1,

    descripcion: descripcion,

    estado: "no completada"


  };

  arrayListaTareas.push (nuevaTarea);

  console.log(`se agrego la tarea: ${descripcion}`);


};






//funcion para eliminar tareas


const eliminarTarea = (id) => {

  let tareaEliminada = false;

  for (let i = 0; i < arrayListaTareas.length; i++) {

    if (arrayListaTareas[i].id === id) {


      arrayListaTareas.splice(i, 1);

      tareaEliminada = true;

      console.log(`tarea ${id} eliminada`);


      break;


    }

  }

  if (!tareaEliminada) {

    console.log(`no se encontro la tarea con el id: ${id}`);

  }

};







// funcion cambiar el estado de las tareas

const tareaYaCompletada = (id) => {

  for (let tarea of arrayListaTareas) {

    if (tarea.id === id) {


      tarea.estado = "completada";

      console.log(`tarea ${id} completada`);

      return;



    }

  }

  console.log(`la tarea con el id ${id} no existe`);


};








// loop para el menu en consola

const menuApp = () => {



  rl.question("elige una opcion (mostrar, agregar, eliminar, completar, salir): ", (opcion) => {
    
    console.log(`seleccionaste la opcion: ${opcion}`);



    if (opcion === "mostrar") {

      mostrarTareas();
      menuApp();

    

    } else if (opcion === "agregar") {

      rl.question("introduce la descripcion de la nueva tarea: ", (descripcion) => {

        agregarTarea(descripcion);

        menuApp();

      });

    

    } else if (opcion === "eliminar") {

      rl.question("introduce el id de la tarea que se eliminara: ", (id) => {

        eliminarTarea(Number(id));

        menuApp();


      });


    } else if (opcion === "completar") {

      rl.question("introduce el id de la tare que se completara: ", (id) => {

        tareaYaCompletada(Number(id));

        menuApp();

      });

    

    } else if (opcion === "salir") {

      console.log("aplicacion finalizada");

      rl.close();



    } else {

      console.log("opcion no reconocida"); 

      menuApp();

    }

  });


};



menuApp();






//---------------------- metodo de uso -----------------------------------

// se inicia la aplicacion tipeando en la consola: npm run start

// se selecciona la funcion que se desea ejecutar: 

// mostrar: imprimir la lista de tareas
// agregar: agregar una tarea
// eliminar: eliminar una tarea
// completar: cambiar el estado de la tarea
// salir: cerrar la aplicaion