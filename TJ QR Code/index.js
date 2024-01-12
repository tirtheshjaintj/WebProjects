let qrtext = document.getElementById("qrtext");
let qrcode = document.getElementById("qrcode");
let share = document.getElementById("share");
qrtext.oninput = () => {
    let text = qrtext.value;
    if (text.replaceAll(' ', '').length > 0) {
        let src = "https://api.qrserver.com/v1/create-qr-code/?data=" + text.replaceAll(" ", "%20");
        fetch(src)
            .then((request) => {
                return request.blob()
            })
            .then((data) => {
                const imageUrl = URL.createObjectURL(data);
                qrcode.src = imageUrl;
                qrcode.style.display = "block";
                qrcode.setAttribute("download", 'qrcode');
                const sharefun = () => {
                    var file = new File([data], "picture.jpg", { type: 'image/jpeg' });
                    var filesArray = [file];
                    if (navigator.canShare && navigator.canShare({ files: filesArray })) {
                        navigator.share({
                            text: 'Scan This QR Code',
                            files: filesArray,
                            title: 'Scan This QR Code',
                            url: 'https://tjqr.netlify.app'
                        });
                    }
                };
                qrcode.onclick = sharefun;
                share.removeAttribute("disabled");
                share.onclick = sharefun;
            })
            .catch((error) => {
                qrcode.style.display = "none";
                share.setAttribute("disabled", "");
                console.clear();

            })
    }
    else {
        qrcode.style.display = "none";
        share.setAttribute("disabled", "");
    }
}
