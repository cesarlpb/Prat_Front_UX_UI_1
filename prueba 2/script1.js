// Agregar evento para que al presionar "Enter" se agregue la tarea
document.getElementById("nuevaTarea").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        agregarTarea();
    }
});

function agregarTarea() {
    // Obtener el input donde se escribe la tarea
    let input = document.getElementById("nuevaTarea");
    let tareaTexto = input.value;
    
    // Obtener el día seleccionado
    let diaSemana = document.getElementById("diaSemana").value;

    // Verificar si el input está vacío
    if (tareaTexto === "" || tareaTexto === " ") {
        return; // Si está vacío, no hace nada
    }

    // Crear un elemento <li> para la tarea
    let li = document.createElement("li");

    // Crear un checkbox
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Crear un span para el texto de la tarea
    let texto = document.createElement("span");
    texto.innerText = tareaTexto;

    // Agregar checkbox y texto al <li>
    li.appendChild(checkbox);
    li.appendChild(texto);

    // Agregar la tarea al día seleccionado
    let lista = document.getElementById(diaSemana);
    lista.appendChild(li);

    // Limpiar el input después de agregar la tarea
    input.value = "";
}
