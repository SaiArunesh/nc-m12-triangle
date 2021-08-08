const inputs = document.querySelectorAll('.input-angle');
const checkButton = document.querySelector('#check-button');
const outputElement = document.querySelector('.output');

function checkTriangle() {
    let sum = checkAngles(inputs[0].value, inputs[1].value, inputs[2].value);

    outputElement.style.display = "block";

    if (inputs[0].value <= 0 || inputs[1].value <= 0 || inputs[1].value <= 0) {
        outputElement.innerText = "Invalid Number Input";
        outputElement.classList.add("error");
        return
    }

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value <= 0) {
            outputElement.innerText = "Invalid Number Input";
            outputElement.classList.add("error");
            return;
        }
    }
    if (sum === 180) {
        outputElement.innerText = "Angles form a triangle";
        outputElement.classList.remove("error");

    }
    else {
        outputElement.innerText = "Not a triangle";
        outputElement.classList.add("error");
    }
}

function checkAngles(angle1, angle2, angle3) {
    angle1 = parseInt(angle1, 10);
    angle2 = parseInt(angle2, 10);
    angle3 = parseInt(angle3, 10);

    return (angle1 + angle2 + angle3);
}