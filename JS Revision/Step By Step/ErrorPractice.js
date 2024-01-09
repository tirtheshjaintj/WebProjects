const LoadScript = async (src) => {
    return new Promise((resolve,reject) => {
        let script1 = document.createElement("script");
        script1.src = src;
        document.body.appendChild(script1);
        script1.onload = () => {
            resolve("Sir Script Loaded Successfully");
        };

        script1.onerror = () => {
            reject(new Error("We Are Sorry Script Not Found"));
        };

    })
}

const main2 = async () => {
    console.log(new Date().getMilliseconds());
    let res=await LoadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")
    console.log(res);
    console.log(new Date().getMilliseconds());
}

main2();