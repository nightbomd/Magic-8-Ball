
const output = document.getElementById("output")
const shakeBtn = document.getElementById("shakeBtn")
const questionOutput = document.getElementById("question-output")
const eightBallImg = document.getElementById("ball-img")
const responseImg = document.getElementById("response-img")

// dont hack me okay
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
        output.innerText = "Please enter a valid question.";
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
            "I'd assume so.",
            "Absolutely!",
            "The stars say yes.",
            "A gallon of water could've prevented this btw.",
            "The future is unclear.",
            "Yes, definitely.",
            "Outlook not so good.",
            "Signs point to yes.",
            "do you even lift bro?",
            "do you get extra time on tests?",
            "just give up atp",
            "try asking google",
            "maybe",
            "no",
        ]
        const randomIndex = Math.floor(Math.random() * responses.length);
        questionOutput.innerHTML = `You asked: <span>${question}...</span> The Magic 8 Ball says:`;
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
