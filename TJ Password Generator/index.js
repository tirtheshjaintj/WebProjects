const password = document.getElementById("password");
const passlength = document.getElementById("length");
const show = document.getElementById("showlen");
const generate = document.getElementById("generate");



document.getElementById("copy").onclick = (e) => {
    navigator.clipboard.writeText(password.value);
    document.getElementById("copy").innerText = "Copied";
    setTimeout(() => {
        document.getElementById("copy").innerText = "Copy";
    }, 1500);

}

passlength.oninput = () => {
    showlen.innerText = "Length " + passlength.value;
    password.value = createpass();
}

const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = lowercase.toUpperCase();
const number = "0123456789";
const symbol = "~!@#$%^&*()_-+={[}]|:;<,>.?/";
const all = lowercase + uppercase + number + symbol;

function createpass() {
    let plength = passlength.value;
    let password = "";
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    while (password.length < plength) {
        password += all[Math.floor(Math.random() * all.length)];
    }
    return password;
}

generate.onclick = () => {
    password.value = createpass();

}

