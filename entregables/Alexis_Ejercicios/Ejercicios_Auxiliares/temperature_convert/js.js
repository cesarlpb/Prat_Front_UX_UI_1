document.getElementById('convertBtn').addEventListener('click', function () {
    // Obtener los valores del formulario
    const number = parseFloat(document.getElementById('number').value);
    const fromUnit = document.getElementById('from').value;
    const toUnit = document.getElementById('to').value;

    // Validar que los valores son correctos
    if (isNaN(number)) {
        alert('Please enter a valid number for the temperature.');
        return;
    }

    // Lógica de conversión de temperaturas
    let result;

    if (fromUnit === 'fahrenheit') {
        if (toUnit === 'celsius') {
            result = (number - 32) * 5 / 9;
        } else if (toUnit === 'kelvin') {
            result = (number - 32) * 5 / 9 + 273.15;
        } else {
            result = number; // Convertir Fahrenheit a Fahrenheit no cambia el valor
        }
    } else if (fromUnit === 'celsius') {
        if (toUnit === 'fahrenheit') {
            result = (number * 9 / 5) + 32;
        } else if (toUnit === 'kelvin') {
            result = number + 273.15;
        } else {
            result = number; // Convertir Celsius a Celsius no cambia el valor
        }
    } else if (fromUnit === 'kelvin') {
        if (toUnit === 'fahrenheit') {
            result = (number - 273.15) * 9 / 5 + 32;
        } else if (toUnit === 'celsius') {
            result = number - 273.15;
        } else {
            result = number; // Convertir Kelvin a Kelvin no cambia el valor
        }
    }

    // Mostrar el resultado
    document.getElementById('result').innerText = `Converted Temperature: ${result.toFixed(2)} ${toUnit.charAt(0).toUpperCase() + toUnit.slice(1)}`;
});
