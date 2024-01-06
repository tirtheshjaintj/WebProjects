const doc=document;
let image=doc.getElementById("image");
let searchbox=doc.getElementById("searchbox");
let keyword="hello";
let page=1;
const access1="dLJjuI3hKJpXHNkilqlnHz-PNyOGKrE4tC5ITnKDgy4";
const access2="8qn1dVr-dUm-5g8j-SD2TxBK4CZ2i2Yl9el9jAF3QTs";

async function searchImage(access){
keyword=image.value;
const url=`https://api.unsplash.com/search/photos
?page=${page}&query=${keyword}&client_id=${access}&per_page=12`;
try{
const response=await fetch(url);
const data=await response.json();
const results=data.results;
if(parseInt(data.total)>0){
    results.forEach((result)=>{
    let image=document.createElement('img');
    image.classList.add("show");
    image.src=result.urls.small;
    let imageLink=doc.createElement("a");
    imageLink.href=result.links.download;
    imageLink.target="_blank";
    imageLink.appendChild(image);
    doc.getElementById("results").appendChild(imageLink);
    });
    }
    else{
        doc.getElementById("results").innerHTML=`<h2>No Results Found </h2>`;
    }
}
catch(err){
    doc.getElementById("results").innerHTML=`<h2>Sorry No Results Found </h2>`;
    console.log(err);
}

}



  searchbox.addEventListener("submit", function(event) {
              event.preventDefault();
              page=1;
              doc.getElementById("results").innerHTML="";
              try{
                searchImage(access1);
              }
              catch(error){
                searchImage(access2);
              }
  });


window.onscroll = function() {
    if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight) {
                      page++;
                      try{
                        searchImage(access1);
                      }
                      catch(error){
                        searchImage(access2);
                      }
    }
};
