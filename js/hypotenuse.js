const inputSides = document.querySelectorAll(".triangle-side");
const calculateBtn = document.querySelector("#calculate");
const outputSide = document.querySelector('.output');;

function findHyp() {
    let z = Math.sqrt(inputSides[0].value * inputSides[0].value + inputSides[1].value * inputSides[1].value)
    outputSide.style.display = "block";

    if (z > 0 && inputSides[0].value>0 && inputSides[1].value>0) {
        outputSide.innerText = Math.round(z * 10000) / 10000 + " cm^2 (rounded to 4 decimals)";
        outputSide.classList.remove("error");
    }
    else {
        outputSide.classList.add("error");
        outputSide.innerText = "Invalid Number";
    }
    

}

calculateBtn.addEventListener("click", findHyp);
