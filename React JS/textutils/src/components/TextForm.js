import React, { useState } from 'react'


export default function TextForm(props) {

  const handleUpper = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted To UpperCase");
  };
  const handleLower = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted To LowerCase");
  };
  const handleSpaces = () => {
    let newtext = text.replaceAll(" ", "");
    setText(newtext);
    props.showAlert("Removed Spaces");
  };
  const handleLines = () => {
    let newtext = text.replaceAll("\n", "");
    setText(newtext);
    props.showAlert("Removed Lines");
  };
  const handleExtraSpaces = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("Removed Extra Spaces");
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied Text");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleClear = () => {
    setText("");
    props.showAlert("Cleared Text");
  };

  const handleCompress = () => {
    let newtext = text.replaceAll(" ", "").replaceAll("\n", "");
    setText(newtext);
    props.showAlert("Compressed Text");
  }

  const [text, setText] = useState("");
  let deferredPrompt=null;
    window.addEventListener('beforeinstallprompt', (e) => {
        deferredPrompt = e;
    });
  
  async function install(){
        try{
        if (deferredPrompt !== null) {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            if (outcome === 'accepted') {
                deferredPrompt = null;
                props.showAlert("Installing App");
            }
        }
      }
      catch(err){
        console.log(err);
      }
    };

  return (
    <>
      <div className={ `container text-${props.mode === "light" ? "dark" : "light"} my-3` }>
        <h3 >{ props.heading }</h3>
        <textarea className={ `form-control bg-${props.mode} text-${props.mode === "light" ? "dark" : "light"}` } placeholder="Enter some text here..." id="myBox" rows="6" value={ text } onChange={ handleOnChange }></textarea>
        <br />
        <button disabled={ text.replaceAll("\n", " ").replaceAll(" ", "").length === 0 } type="button" onClick={ handleUpper } className="btn btn-primary m-2">Convert to Upper</button>
        <button disabled={ text.replaceAll("\n", " ").replaceAll(" ", "").length === 0 } type="button" onClick={ handleLower } className="btn btn btn-success m-2">Convert to Lower</button>
        <button disabled={ text.replaceAll("\n", " ").replaceAll(" ", "").length === 0 } type="button" onClick={ handleSpaces } className="btn btn-primary m-2">Remove Spaces</button>
        <button disabled={ text.replaceAll("\n", " ").replaceAll(" ", "").length === 0 } type="button" onClick={ handleLines } className="btn  btn-success m-2">Remove LineBreak</button>
        <button disabled={ text.replaceAll("\n", " ").replaceAll(" ", "").length === 0 } type="button" onClick={ handleExtraSpaces } className="btn btn btn-primary m-2">Remove Extra Spaces</button>
        <button disabled={ text.replaceAll("\n", " ").replaceAll(" ", "").length === 0 } type="button" onClick={ handleCompress } className="btn btn-success m-2">Compress Text</button>
        <button disabled={ text.replaceAll("\n", " ").replaceAll(" ", "").length === 0 } type="button" onClick={ handleCopy } className="btn btn-primary m-2">Copy Text</button>
        <button disabled={ text.replaceAll("\n", " ").replaceAll(" ", "").length === 0 } type="button" onClick={ handleClear } className="btn btn-success m-2">Clear Text</button>
        <button id="installApp" onClick={install} className="btn btn-warning m-2">Install As App</button>

      </div>
      <div className={ `container text-${props.mode === "light" ? "dark" : "light"}` }>
        <h2>Your text Summary</h2>
        <h5>{ text.replaceAll("\n", " ").split(" ").filter((e) => { return e.length !== 0 }).length } words { text.replaceAll(" ", "").replaceAll("\n", "").length } characters</h5>
        <h5>It wil take { (text.replaceAll(" ", "").replaceAll("\n", "").length > 0) ? (text.split(" ").filter((e) => { return e.length !== 0 }).length * 0.01) : 0 } minutes to read this text</h5>
        <h2>Preview</h2>
        <p>{ (text.replaceAll(" ", "").replaceAll("\n", "").length > 0) ? text : "Here will be a preview of your text" }</p>
      </div>
    </>
  )
}
