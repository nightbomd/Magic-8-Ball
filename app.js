

const output = document.getElementById("output")
const shakeBtn = document.getElementById("shakeBtn")
const questionOutput = document.getElementById("question-output")
function shakeMagic8Ball() {
     const question = prompt("Ask the Magic 8 Ball a question:");
    if (question.trim() === "") {
        output.innerText = "Please type a question... idiot";
    }
    else {
       
         const responses = [
        "It is certain.",
        "Without a doubt.",
        "You may rely on it.",
        "Ask again later.",
        "Better not tell you now.",
        "Don't count on it.",
        "My sources say no.",
         ]

    randomIndex = Math.floor(Math.random() * responses.length);
     questionOutput.innerHTML = `You asked: ${question}... The Magic 8 Ball says:`;
    output.innerText = responses[randomIndex];
    }

}

shakeBtn.addEventListener("click", () => {shakeMagic8Ball()})
// clear when refreshing
window.addEventListener("load", () => {
    output.innerText = ""
    questionOutput.innerText = ""
});
