import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick = ()=>
    {
        // console.log("Upper Case was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to UpperCase','success');
    }
    const handleLoClick = ()=>
    {
        let newTex = text.toLowerCase();
        setText(newTex);
        props.showAlert('Converted to LowerCase','success');
    }
    const handleOnChange = (event)=>
    {
        // console.log("Upper Case was clicked");
        setText(event.target.value);
    }
    const handleCapitalize = () => 
    {
        let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
        setText(newText);
        props.showAlert('Capitalized','success');
    }
    const handleReClick = ()=>
    {
        let newText = "";
        setText(newText);
        props.showAlert('Reset Text Box','success');
    }
    const handlefindChange = (event) => 
    {
        findWord(event.target.value);
    }
    const handleReplaceChange = (event) => 
    {
        console.log(replaceWord(event.target.value)) ;
    }
    const handleReplaceClick = () => 
    {
        let newText = text.replaceAll(fWord,rWord);
        setText(newText);
        props.showAlert('Replaced Text','success');
    }
    const handleCopy = () =>
    {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Text Copied','success');
    }

    //if space exist then splits and add it into the array and then again print it
    const handleExtraSpace = ()=>
    {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    // text updation through the setText function
    const [text, setText] = useState('');
    const [fWord, findWord] = useState("");
    const [rWord, replaceWord] = useState("");
    // Text="hello"; --> wrong way to change the state.
    // setText("hello"); //--> correct way to change the state.
    return (
    <>
    {/* <div className='container my-2'>
        <button className="btn btn-success mx-2" onClick={handleLightTheme}>Light Theme</button>
        <button className="btn btn-success mx-2" onClick={handleDarkTheme}>Dark Theme</button>
    </div> */}
    <div className="container" style={{color: props.mode==='light'?'dark':'white'}}>
        <h3 >{props.heading}</h3>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" style={{backgroundColor: props.mode==='light'?'white':'grey' , color: props.mode==='light'?'dark':'white'}}value = {text} onChange={handleOnChange}  rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Upper Case</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Lower Case</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy</button>
        <button className="btn btn-primary mx-1" onClick={handleCapitalize}>Capitalize</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Space</button>
        <button className="btn btn-primary mx-1" onClick={handleReClick}>Reset</button>
    </div>
    <div className="container my-4" style={{color: props.mode==='light'?'dark':'white'}}>
            <h3>{props.heading2}</h3>
            <textarea className="form-control" id="myBox" value = {fWord} onChange={handlefindChange}  rows="2"></textarea>
            <textarea className="form-control my-4" id="myBox" value = {rWord} onChange={handleReplaceChange}  rows="2"></textarea>
            <button className="btn btn-primary" onClick={handleReplaceClick}>Replace Word</button>
    </div>
    <div className="container my-4" style={{color: props.mode==='light'?'dark':'white'}}>
        <h2>Your Text Summary</h2>
        <h5>Your text has {text.replace(/[ ]+/,'').trim()===''?0:text.replace(/[ ]+/g,' ').trim().split(' ').length} words and {text.length} characters</h5>
        <h5>{0.008 * text.split(" ").length} Minutes To Read</h5>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter text to preview it here!!"}</p>
    </div>
    </>
  )
}
