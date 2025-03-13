function clearDisplay() {
    document.querySelector("[name='display']").value = "";
}

function deleteLastChar() {
    const display = document.querySelector("[name='display']");
    display.value = display.value.toString().slice(0, -1);
}

function calculateResult() {
    const display = document.querySelector("[name='display']");
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
