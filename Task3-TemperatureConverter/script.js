function convertTemperature() {
    const tempInput = document.getElementById("temperature").value.trim();
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    const outputDiv = document.getElementById("output");
    if (tempInput === "" || isNaN(tempInput)) {
        outputDiv.textContent = "⚠ Please enter a valid number!";
        return;
    }

    let temp = parseFloat(tempInput);
    let result;
    if (fromUnit === toUnit) {
        result = temp;
    } else {
        let tempInCelsius;
        if (fromUnit === "C") tempInCelsius = temp;
        else if (fromUnit === "F") tempInCelsius = (temp - 32) * 5/9;
        else if (fromUnit === "K") tempInCelsius = temp - 273.15;
        if (toUnit === "C") result = tempInCelsius;
        else if (toUnit === "F") result = (tempInCelsius * 9/5) + 32;
        else if (toUnit === "K") result = tempInCelsius + 273.15;
    }

    outputDiv.textContent = `Result: ${result.toFixed(2)} ${toUnit}`;
}
