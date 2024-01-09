const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('#score');
const moles = document.querySelectorAll('.mole');
let audio = document.getElementById("click");
let back = document.getElementById("back");
window.onclick = () => {
    back.play();
    back.autoplay = "true";
    back.loop = "true";
}

let last = document.getElementById("last");
let lasthole;
if (localStorage.getItem("score")) {
    last.innerText = "Highest Score " + localStorage.getItem("score");
}
else {
    localStorage.setItem("score", 0);
}
let score = 0;
function randTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomHole() {
    const id = Math.floor(Math.random() * holes.length)
    const hole = holes[id];
    // console.log(hole);
    if (hole === lasthole) {
        randomHole();
    }
    lasthole = hole;
    return hole;
}

function popup() {
    const time = randTime(200, 800);
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
        popup();
    }, time);
}

moles.forEach((i) => {
    i.addEventListener("click", (e) => {
        i.classList.remove("up");
        // this.classList.remove("up");
        if (!e.isTrusted) {
            return null;
        }
        else {
            ++score;
            console.log(score);
            scoreBoard.innerText = score;
            if (score > Number.parseInt(localStorage.getItem("score"))) {
                localStorage.setItem("score", score);
                last.innerText = "Highest Score " + localStorage.getItem("score");
            }
            audio.play();
            // popup();
        }
    });
});
popup();
