document.getElementById("submit").onclick = function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const selectedOption = document.getElementById("option").value;
    const inputTemp = parseFloat(document.getElementById("inputTemp").value);
    let result;

    if (isNaN(inputTemp)) {
        alert("Please enter a valid temperature.");
        return;
    }

    if (selectedOption === "1") {
        // Convert Celsius to Fahrenheit
        result = (inputTemp * 9/5) + 32;
        alert(`${inputTemp} °C is ${result.toFixed(2)} °F`);
    } else if (selectedOption === "2") {
        // Convert Fahrenheit to Celsius
        result = (inputTemp - 32) * 5/9;
        alert(`${inputTemp} °F is ${result.toFixed(2)} °C`);
    } else {
        alert("Please select a conversion option.");
    }
};
