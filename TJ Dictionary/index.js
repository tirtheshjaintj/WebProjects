const dictText = document.getElementById("dicttext");
const dictout=document.getElementById("dictout");
const searchbox=document.getElementById("searchbox");

searchbox.onsubmit = async (event) => {
    console.clear();
    event.preventDefault();
    let text = dictText.value;
    // let text="Hello";
    $("#dictout").hide();
        if(!navigator.onLine){
        dictout.innerHTML="<center> <b>No Internet 🛜</b></center>";
        $("#dictout").slideDown();
        }
        else{

            if(text.replaceAll(" ","").length>0){

            let src = "https://api.dictionaryapi.dev/api/v2/entries/en/" + text;
            let response=await fetch(src);
            let data=await response.json();
        if(data.title=="No Definitions Found"){
            dictout.innerHTML="<center><b> Word: "+ text.toUpperCase() +" Not Found </b></center>";
            $("#dictout").slideDown();
        }

let count=0;
try{
   for(let i of data){
    if(count==0){
        dictout.innerHTML="";
            dictout.innerHTML+="<center><b>WORD: "+(i.word).toUpperCase()+"</b></center><br><br>";
    }
            for(let j of i.meanings){
                dictout.innerHTML+="<b>Speech: "+j.partOfSpeech.toUpperCase()+"</b><br><br>";
                    for(let k of j.definitions){ 
                        dictout.innerHTML+="<ul><li>"+k.definition+"</li></ul><br><br>";
                    }
                }
                $("#dictout").slideDown();
                count++;
        }
    }
    catch(err){

    }


    }
}
console.clear();

}

 
