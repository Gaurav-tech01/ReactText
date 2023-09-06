import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("UpperCase was Clicked");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted To UpperCase","success")
    }

    const handleLoClick = () => {
        console.log("UpperCase was Clicked");
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted To LowerCase","success")
    }

    const handleClearClick = () => {
        console.log("UpperCase was Clicked");
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared","success")
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text.value);
        // document.getSelection().removeAllRanges();
        props.showAlert("Text Copied","success")
    }
    const handleOnChange = (event) => {
        setText(event.target.value)

    }

    const [text, setText] = useState('Enter Text Here');
    return (
        <>
            <div className="ontainer" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>
                    {props.heading}
                </h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="6" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
                </div>
                <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert To UpperCase</button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert To LowerCase</button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear</button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your Text Summary</h1>
                <p>{text.split(/\s+/).filter((element)=>{
                    return element.length!==0
                }).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(/\s+/).filter((element)=>{
                    return element.length!==0
                }).length} minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something to preview it here"}</p>
            </div>
        </>
    )
}
