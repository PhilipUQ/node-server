#¿Qué sucedio al usar async y await?

#en primer lugar se las funciones al retornar una promesa, ya no ejecutan directamente la logica, si no que devuelven una promesa 

#el menu principal ahora se trabaja con async y el await trabaja con la funciones de agregarTarea, borrarTarea, y tareaYaCompletada, lo que note es que el menu principal no se ejecutaba hasta que terminara la de ejecutarse la funcion, por ejemplo, no se ejecuta el menu hasta que agregarTarea no resolvia la promesa.


#¿Qué sucedio al usar el método then()?

#en el metodo .then() sucede algo distinto, ya que la funcion seguia ejecutandose una vez se cumplia la promesa, ademas, se podia seguir ejecuntando otras funciones y el menu y seguia ejecutandose en segundo plano, es cuando ya se finaliza el script que finalizan la funciones, es decir que se ejecutan hasta despues de haberse resuelto la promesa.


#¿Qué diferencias encontraste entre async, await y el método then()?

#la principal diferencia que encontre es que async y await es mas parecido a lo sincronico, pausa la ejecucion de async mientras que se resuelve la promesa, ya que una vez resuleta la promesa el menu principal se ejecutaba. Por otra parte, el .then() lo que hace es que se puede ejecutar varias funciones en simultaneo y las va intercalando, la aplicacion no espera a que se resuelva al promesa para seguir con la siguiente iteracion del siclo while. al resolverse la promesa la funcion dentro de then() de ejecuta.

#otra diferencia es que .then() necesita manejar los errores en el mismo bloque, en cambion async y await se puede manejar los errores con try y catch