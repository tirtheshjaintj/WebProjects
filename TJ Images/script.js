const doc=document;
// hjTsSDwi9o1x60SD2JBLI91_DdViyP34Do0AWCtbID4
// 0EFTkCfDhyjWK76c9kwjKekOyEGndzKC2gL-cXxA6O4
let image=doc.getElementById("image");
let search=doc.getElementById("search");
let keyword="hello";
let page=1;
let access="8qn1dVr-dUm-5g8j-SD2TxBK4CZ2i2Yl9el9jAF3QTs";

async function searchImage(){

keyword=image.value;
const url=`https://api.unsplash.com/search/photos
?page=${page}&query=${keyword}&client_id=${access}&per_page=12`;
const response=await fetch(url);
const data=await response.json();
const results=data.results;

results.forEach((result)=>{
const image=document.createElement('img');
image.classList.add("show");
image.src=result.urls.small;
const imageLink=doc.createElement("a");
imageLink.href=result.links.download;
imageLink.target="_blank";
imageLink.appendChild(image);
doc.getElementById("results").appendChild(imageLink);
});
page++;
console.log(data);
}

image.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        page=1;
        doc.getElementById("results").innerHTML="";
        searchImage();
    }
  });


window.onscroll = function() {
    if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight) {
                      page++;
                      searchImage();
    }
};
