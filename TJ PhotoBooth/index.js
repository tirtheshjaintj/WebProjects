const doc = document;
const video = doc.querySelector("#video");
const canvas = doc.querySelector("#canvas");
const ctx = canvas.getContext('2d');
const strip = doc.querySelector(".strip");
const snap = doc.querySelector(".snap");
const playpause = doc.getElementById("playpause");
function getVideo() {

    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(mediaStream => {
            video.srcObject = mediaStream;
            video.play();
        })
        .catch(error => {
            alert(error);
        })
}

getVideo();
function putToCanvas() {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const width = canvas.width;
    const height = canvas.height;
    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);
        // context.clearRect(0, 0, width, height);
    }, 16);
}


video.addEventListener("canplay", putToCanvas);


function play() {
    if (video.paused) {
        video.play();
        playpause.innerText = "Pause";
    }
    else {
        video.pause();
        playpause.innerText = "Play";
    }
}

let i = 1;
function takePhoto() {
    snap.play();

    const data = canvas.toDataURL('image/webp');
    const link = doc.createElement('a');
    link.href = data;
    link.setAttribute("download", ('handsome' + i));
    link.textContent = "Download Image";
    link.innerHTML = `<img src="${data}" alt="Beautiful">`;
    strip.insertBefore(link, strip.firstChild);
    i++;
}