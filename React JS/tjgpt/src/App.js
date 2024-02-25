import logo from './logo.svg';
import './App.css';
import $ from 'jquery';

function App() {
function prompt(e){
    e.preventDefault();
    let prompt=document.getElementById("prompt").value;
    console.log(document.getElementById("prompt").value);
    $.ajax({
      type: 'POST',
      url:'https://tirtheshjain.000webhostapp.com/AI-assist-helper.php',
      data: {
        prompt:prompt
      },
      dataType: "text",
      beforeSend: function() {
        document.getElementById("output").innerHTML=`<div class="loader"><div class="ring">TJ GPT<span></span></div></div>`;
        document.getElementById("actions").style.display="none";
    },
      success: function(data) {
document.getElementById("output").innerHTML=data;
document.getElementById("actions").style.display="flex";
    }
    });
}
const downloadFile = () => {
  const link = document.createElement("a");
  const content = document.getElementById("output").innerHTML;
  const file = new Blob([content], { type: 'text/plain' });
  link.href = URL.createObjectURL(file);
  link.download = document.getElementById("prompt").value+".txt";
  link.click();
  URL.revokeObjectURL(link.href);
};

function copy(){
  let output=document.getElementById("output").innerHTML;
  if(navigator.clipboard) {
    navigator.clipboard.writeText(output);
  }
};



  return (
    <div className="App">
      <label htmlFor="prompt" className="App-header">
        <label htmlFor="prompt"><h1>TJ GPT</h1></label>
        <div id="actions" style={{display:'none'}}>
      <button className="fa fa-download" id="download" title="Download" onClick={downloadFile}></button>
      <button className="fa fa-copy" id="copy" title="Copy" onClick={copy}></button>
      </div>
      <label htmlFor="prompt" id="output" className='pre-wrapper'>
       <h2>How can I help you today?</h2> 
      </label>
      <form onSubmit={prompt} id="searchprompt" className="search">
        <div id="flex">
       <input type="text" name="prompt" id="prompt" placeholder="How Can I Help You Today?"  required autoFocus/>
       <button className="fa fa-send-o"></button>
       </div>
      </form>
      </label>
    </div>
  );
}



export default App;
