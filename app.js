
const output = document.getElementById("output")
const shakeBtn = document.getElementById("shakeBtn")
const questionOutput = document.getElementById("question-output")
const eightBallImg = document.getElementById("ball-img")
const responseImg = document.getElementById("response-img")

const apiKey = "YlyDPUN0CDBb-5cJGK4PLItgFvdqUsGhSSsnmBorghE";
function generateImg() {
    fetch(`https://api.unsplash.com/photos/random?client_id=${apiKey}`)
        .then(res => res.json())
        .then(data =>{

         responseImg.src = data.urls.small
         responseImg.style.display = "block";
        })
        .catch(err => console.error("Error fetching image:", err));
}

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
      
        const randomIndex = Math.floor(Math.random() * responses.length);
        questionOutput.innerHTML = `You asked: ${question}... The Magic 8 Ball says:`;
        output.innerText = responses[randomIndex];
        generateImg();
    }

}

eightBallImg.addEventListener("mousedown", () => {
    let timer = 0;
    const interval = setInterval(() => {
        output.innerText = "Shaking the Magic 8 Ball" + ".".repeat(timer % 4);
        timer++;

        if (timer > 8) {
            clearInterval(interval);
            eightBallImg.classList.remove("shake");
            shakeMagic8Ball();
        }
        else {
            eightBallImg.classList.add("shake");
        }
    }, 300);
});
// clear when refreshing
window.addEventListener("load", () => {
    output.innerText = ""
    questionOutput.innerText = ""
});
