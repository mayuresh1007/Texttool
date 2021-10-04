import React, { useState } from 'react';



export default function Utility(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase()
        setText(newText)// this will change the value of text variable in html value={text}
        props.showAlert("converted to uppercase", "success");
    }
    const handleLoClick = () => {
        // console.log("Uppercase was clicked " + text);
        let newText = text.toLowerCase()
        setText(newText)// this will change the value of text variable in html value={text}
        props.showAlert("converted to lowercase", "success");

    }
    // fun clear the text
    const handleClr = () => {
        let newText = "";
        setText(newText)// this will change the value of text variable in html value={text}
        props.showAlert("You text cleared", "success");

    }
    // to capitalize the first character of any string
    const capitalize = () => {

        let firstchar = text.charAt(0); // storing the first char of the string
        let newText = firstchar.toUpperCase(); // converting that to uppercase
        setText(newText + text.slice(1)); // printing it with rest excluding the first char by using slice

    }
    // this function copy the text 
    const handleCopy = () => {
        // let text = document.getElementById('typebox');
        // text.select();
        // document.getSelection().removeAllRanges() // for desable when nothing in textarea
        navigator.clipboard.writeText(text);//text.value
        props.showAlert("text copied successfully to clipboard", "success");

    }
    //  this fun remove extra spaces
    const handleExtraspace = () => {
        let newText = text.split(/[ ]+/);// regEx used
        setText(newText.join(' '))
        props.showAlert("removed extra spaces", "success");

    }

    //  On changing the value of text this fun need to handle the event
    const handleOnChange = (event) => {
        // console.log("onchange was running");
        setText(event.target.value);// handling the eventlistener
    }
    const [text, setText] = useState('');
    // const [text(variable), setText()function] = useState('Enter text here'(defalult value of <--text variable));
    // text = "new text" // wrong way to change the state
    // setText = "new text" // wrong way to change the state
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'wheat' : 'black' }}>
                <h3 className="container mt-2">{props.heading}</h3>
                <div className="container mt-2">
                    <textarea placeholder="type here" className="form-control" id="typebox" rows="8" value={text} style={{ backgroundColor: props.mode === 'dark' ? '#514e4e' : 'white', color: props.mode === 'dark' ? 'wheat' : 'black' }} onChange={handleOnChange}></textarea>
                    <button disabled={text.length===0} className="my-2 mx-1 btn btn-sm btn-dark" onClick={handleUpClick}>Upper case</button>
                    <button disabled={text.length===0} className="my-2 mx-1 btn btn-sm btn-dark" onClick={handleLoClick}>Lower case</button>
                    <button disabled={text.length===0} className="my-2 mx-1 btn btn-sm btn-dark" onClick={capitalize}>Capitalize first latter</button>
                    <button disabled={text.length===0} className="my-2 mx-1 btn btn-sm btn-dark" onClick={handleCopy}>Copy Text</button>
                    <button disabled={text.length===0} className="my-2 mx-1 btn btn-sm btn-dark" onClick={handleExtraspace}>Remove Extra spaces</button>
                    <button disabled={text.length===0} className="my-2 mx-1 btn btn-sm btn-dark" onClick={handleClr}>Clear text</button>

                </div>
                <div className="container" style={{ color: props.mode === 'dark' ? 'wheat' : 'black' }}>
                    <br /><h3>Your text summery</h3>
                    {/* <p><b>{text.split(" ").length} words and {text.length} charachers</b></p> */}
                    {/* <p><b>{text.split(" ").filter(function (n) { return n !== "" }).length} words and {text.length} charachers</b></p> */}
                    <p><b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} charachers</b></p>
                    <p><b>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} This minutes take to read this text for normal human</b></p>
                    <br/><h3>Preview</h3>
                    {/* <p style={{visualViewport:'100wh'}}>{text}</p> */}
                    {/* <p>{text}</p>  only text showing but we adding son=me text for beautify*/}
                    <p>{text.length > 0 ? text : "Nothing to preview !!!"}</p>
                </div>
            </div>
        </>

    )
};


