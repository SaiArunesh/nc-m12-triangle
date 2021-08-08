const inputs = document.querySelectorAll(".input-cm");
const submitBtn = document.querySelector("#calculate-button");
const output = document.querySelector('.output');;
const areaForm = document.querySelector("#area-form");

function calculateArea() {
    let area = 0.5 * Number(inputs[0].value) * Number(inputs[1].value);
    output.style.display = "block";
    if (area > 0 && inputs[0].value>0 && inputs[1].value>0) {
        output.classList.remove("error");
        output.innerText = Math.round(area * 10000) / 10000 + " cm^2 (rounded to 4 decimals)";
    }
    else {
        output.classList.add("error");
        output.innerText = "Invalid Number";
    }

}

submitBtn.addEventListener("click", calculateArea);