
let promise = fetch("https://jsonplaceholder.typicode.com/todos/1"); 


promise.then((response) => {
    console.log(response.status);
    console.log(response.ok);
    // console.log(response.headers);
    return response.json();
})
    .then((response) => {
    console.log(Object.keys(response))
    })

// localStorage.setItem("eh", "da");

let options = {
    method: "POST",
    headers: {
        "Content-type":"application/json"
    },
    body: JSON.stringify({
        title: "Tirthesh Jain",
        age: 19,
        userId: 100
    })

}

const post = async (url) => {
    let promise2 =await fetch(url, options);
    let response = await promise2.json();
    console.log(response);
}
post("https://jsonplaceholder.typicode.com/posts");

// let promise2 = fetch("https://jsonplaceholder.typicode.com/posts", options);
// promise2.then((response) => {
//     return response.json();
// }).then((response) => {
//     console.log(response);
// })