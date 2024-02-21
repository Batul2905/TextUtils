import React,  {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success")
    }
    const handleLoClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success")
    }
    const handleClClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = " ";
        setText(newText);
        props.showAlert("Text cleared", "success")
    }
    const handleCapitalClick = () => {
        let newText = text.toLowerCase().split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
        setText(newText);
        props.showAlert("First alphabet of word converted to Capital", "success")
    }
     const handleCopy = () => {
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard", "success")
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed", "success")
    }
    const handleOnChange = (event) => {
        // console.log("on change");
        setText(event.target.value);
    }
    const [text, setText] = useState(''); 
    // text = "text 2"; //Incorrect way to change
    // setText("text 2"); //Correct way to change
    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} 
            style={{backgroundColor: props.mode==='dark'?'#13466e':'white', 
            color: props.mode==='dark'?'white':'#042743'}} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-info mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-info mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-info mx-1" onClick={handleCapitalClick}>Title Case</button>
        <button className="btn btn-info mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-info mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-danger mx-1" onClick={handleClClick}>Clear</button>
        {/* <button className="btn btn-info mx-1" onClick={handleDwnldClick}>Download Text</button> */}
        </div>
        <div className="container my-2" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters.</p>
            <p>{0.008 * text.split(" ").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter your text in the textbox above to preview it"}</p>
        </div>
        </> 
    )
} 
 