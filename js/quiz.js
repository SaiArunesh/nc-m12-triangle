const quizForm = document.querySelector(".quiz");
const submitBtn = document.querySelector("#submit");
const scoreOutput = document.querySelector('.output');;

const answers = ["2", "1"];

function checkAnswer() {
    let score = 0;
    const userAnswers = new FormData(quizForm);
    let i = 0;
    for (let value of userAnswers.values()) {
        if (value === answers[i]) {
            score = score + 1;
        }
        i = i + 1;
    }
    console.log(score);
    scoreOutput.innerText = "Score : " + score;
    scoreOutput.style.display = "block";
}
quizForm.addEventListener("change", checkAnswer);
submitBtn.addEventListener("click", checkAnswer);