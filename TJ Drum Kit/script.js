const keys = Array.from(document.getElementsByClassName("key"));

keys.forEach(e => {
    console.log(e);
    e.onclick = () => {
        audio(e.dataset.key);

    }
})

window.onkeydown = (e) => {
    // console.log(e.keyCode);
    audio(e.keyCode);

}

function audio(e) {
    const audio = document.querySelector(`audio[data-key="${e}"]`);
    const key = document.querySelector(`.key[data-key="${e}"]`);

    if (audio) {
        audio.currentTime = 0;
        audio.play();
        key.classList.toggle("playing");
        setTimeout(() => {
            key.classList.toggle("playing");
        }, 200);
    }
}