const doc = document;

let group=doc.getElementsByClassName("child");

const log = () => {
    console.log("Hello");
};

for (let i of group) {  
    i.addEventListener("click", log);
}

group[0].removeEventListener("click", log);

// setInterval(async () => {
//     let con = await fetch("https://jsonplaceholder.org/users");
//     let a = await con.json();
//     console.log(a);

// }, 1000);


window.onclick = async () => {
    let data = await fetch("https://v2.jokeapi.dev/joke//Programming,Pun,Misc?type=single&blacklistFlags=nsfw,explicit");
    let json = await data.json();
    console.log(json.joke);

};


// log(group[0]);