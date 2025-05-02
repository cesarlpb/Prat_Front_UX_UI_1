document.getElementById('btn').addEventListener('click', function () {
    // Obtener los valores del formulario
    const task = document.getElementById('task').value;
    const table = document.getElementById('tasks');

    // Verificar que se haya ingresado una tarea
    if (task.trim() === "") {
        alert("Por favor, ingresa una tarea.");
        return;
    }

    // Crear una nueva fila en la tabla
    const row = table.insertRow();

    // Crear una nueva celda para el checkbox de completar
    let completeCell = row.insertCell();
    let completeCheckbox = document.createElement("input");
    completeCheckbox.type = "checkbox";
    completeCell.appendChild(completeCheckbox);

    // Crear una nueva celda <th> y agregarle el texto de la tarea
    let lista = document.createElement("th");
    let lista_texto = document.createTextNode(task);
    lista.appendChild(lista_texto);
    row.appendChild(lista);

    // Crear una nueva celda con el botón "Eliminar"
    let deleteCell = row.insertCell();
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";
    deleteCell.appendChild(deleteButton);

    // Agregar el evento de eliminación para el botón de eliminar
    deleteButton.addEventListener('click', function () {
        row.remove();  // Elimina la fila completa
    });

    // Agregar el evento para marcar como completada al hacer click en el checkbox
    completeCheckbox.addEventListener('change', function () {
        if (completeCheckbox.checked) {
            lista.style.textDecoration = 'line-through';  // Tachado
            lista.style.color = 'gray';  // Cambiar color a gris
        } else {
            lista.style.textDecoration = 'none';  // Quitar el tachado
            lista.style.color = 'black';  // Restaurar el color original
        }
    });

    // Limpiar el campo de tarea después de agregarla
    document.getElementById('task').value = "";
});
