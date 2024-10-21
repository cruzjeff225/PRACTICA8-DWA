//Seleccionando el campo de entrada, el botón de agregar y lista de tareas
var nuevaTareaInput = document.getElementById("nuevaTarea"); //Campo de texto para nueva tarea
var agregarBtn = document.getElementById("btnAgregar"); //Botón para agregar nueva tarea
var listaTareas = document.getElementById("listaTareas"); //Lista donde agregamos tareas

//Agregamos un evento al botón de Agregar para esuchar los clicks
agregarBtn.addEventListener("click", function(){
    // Obtenemos el texto ingresado en el campo de nueva tarea
    var textoTarea = nuevaTareaInput.value;

    //Verificando que el campo no esté vacío
    if(textoTarea !== ""){
        // Creamos un nuevo elemento 'li' para la tarea
        var nuevaTarea = document.createElement("li");
        nuevaTarea.classList.add("tarea"); //añadimos la clase 'tarea'
        
        // Creamos un span para contener el texto de la tarea
        var spanTexto = document.createElement("span");
        spanTexto.textContent = textoTarea; //Asignamos el texto de la tarea
        nuevaTarea.appendChild(spanTexto); //Agregamos el texto al "li"
    
        // Creamos un div para los botones
        var divBotones = document.createElement("div");

        // Creamos un botón para eliminar tareas
        var eliminarBtn = document.createElement("button");
        eliminarBtn.classList.add("eliminarBtn"); // Añadiendo la clase de estilos
        eliminarBtn.textContent = "Eliminar";

        //Evento para eliminar la tarea
        eliminarBtn.addEventListener("click", function(){
            listaTareas.removeChild(nuevaTarea); // Eliminando tarea del DOM
        });

        // Creando un botón para modificar la tarea
        var modificarBtn = document.createElement("button");
        modificarBtn.classList.add("moficarBtn");
        modificarBtn.textContent = "Modificar";

        // Evento para modificar la tarea
        modificarBtn.addEventListener("click", function(){
            //Verificar si la tarea está en modo edición
            if (modificarBtn.textContent === "Modificar"){
                modificarBtn.textContent = "Guardar"; // Cambiando el texto del botón

                // Convertimos el contenido de la tarea en un campo editable
                var inputModification = document.createElement("input");
                inputModification.type = "text"; 
                inputModification.value = spanTexto.textContent; // Asignando el texto de la tarea actual
                nuevaTarea.replaceChild(inputModification, spanTexto); // Reemplazamos el texto por el campo de entrada
            } else {
                modificarBtn.textContent = "Modificar"; // Cambiando nuevamente el botón a "Modificar"

                // Recuperando el valor del campo editable
                var nuevoTexto = nuevaTarea.firstChild.value;

                // Actualizamos el texto del span
                spanTexto.textContent = nuevoTexto;

                // Reemplazando el campo de entrada por el nuevo texto
                nuevaTarea.replaceChild(spanTexto, nuevaTarea.firstChild);
            }
        });
        // Añadiendo los botones al div de botones
        divBotones.appendChild(modificarBtn);
        divBotones.appendChild(eliminarBtn);

        //Añandiendo el div de botones a la tarea
        nuevaTarea.appendChild(divBotones)

        // Añadiendo la nueva tarea a la lista de tareas
        listaTareas.appendChild(nuevaTarea);

        //Limpiando el campo de entrada despues de agregar una tarea
        nuevaTareaInput.value = "";
    } else {
        // Si el campo está vacío mistramos una alerta
        alert("Por favor, ingresa una tarea: ");
    }
});

