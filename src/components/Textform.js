import React, { useState } from "react";

export default function Textform(props) {
  //  convert to upper case
  const onUpperClicked = ()=> {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case", "Success");
  }
  

    //  convert to Lower case
  const onLowerClicked = ()=> {
    let newText = text.toLowerCase();
    // console.log("lowerClicked");
    setText(newText);
    props.showAlert("Converted to lower case", "Success");
  }

    //  cCopy Text
  const onCopyClicked = ()=>{
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy text", "Success");
  }

    //  Removed Extra space
  const onRemoveSpacesClicked = ()=> {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Space removed", "Success");

  }


    //  Delet text
  const onClearClicked = ()=> {
    let newText = "";
    // console.log("Clear Clicked");
    setText(newText);
    props.showAlert("Clear text", "Success");
  }

  
  const handlerUpClicked = (event)=> {
    setText(event.target.value);
  }
  
  const [text, setText] = useState("Enter text here");

   // Update text
   //text = "Hii"; // wrong way to change the state
   //setText("new Text"); // correct way to change the state

  return (
    <div>
      <div className="text" style={{color: props.mode ==="ligthTheme"?"black":"white"}}>
        <h1>{props.heading}</h1>
        <textarea name="form-control" value = {text} style={{backgroundColor: props.mode ==="ligthTheme"?"white":"rgb(53, 51, 51)",
      color: props.mode ==="ligthTheme"?"black":"white"}}  onChange={handlerUpClicked} id="myBox" cols="30" rows="10" ></textarea>
      </div>
      <div className="btn-Container"> 
        <button className="btn" onClick={onUpperClicked}>Convert to uppercase</button>
        <button className="btn" onClick={onLowerClicked}>Convert to uppercase</button>
        <button className="btn" onClick={onCopyClicked}>Copy Text</button>
        <button className="btn" onClick={onRemoveSpacesClicked}>Remove Spaces</button>
        <button className="btn" onClick={onClearClicked}>Clear all text</button>
      </div> 

      <div className="container" style={{color: props.mode ==="ligthTheme"?"black":"white"}}>
        <h1 className="textInfo">Your text summary</h1>
        <p className="textInfo"> {text.split(/[ ]+/).length-1} words {text.length} characters </p>

        <h1 className="textInfoPreview">Preview</h1>
        <p className="textInfo">{text}</p>
      </div>
    </div>
  );
}
