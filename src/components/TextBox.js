import React, { useState } from "react";

export default function TextBox(props) {
  const onChangeText = (event) => {
    setText(event.target.value);
    // console.log("Change");
  };

  const convertToUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    // console.log("Clicked");
    props.showAlert("Converted to upper case", "success");
  };
  const convertToLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case", "success");

    // console.log("Clicked");
  };
  const handlerCopyText = () => {
    let copyText = document.getElementById("mybox");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    props.showAlert("Copy to clipboard", "success");
  };
  const handlerClearText = () => {
    setText("");
    props.showAlert("Clear text", "success");
  };
  const handlerRemoveExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    //  console.log(newText);
    setText(newText.join(" "));
    props.showAlert("No more extra spaces", "success");
  };

  const [text, setText] = useState("");

  return (
    <div
      className={`container my-3 text-${
        props.mode === "dark" ? "light" : "dark"
      }`}
    >
      <h3 className="mb-3">{props.heading}</h3>
      <div className="form-group">
        <textarea
          className={`form-control text-${
            props.mode === "dark" ? "light" : "dark"
          }`}
          id="mybox"
          style={{
            backgroundColor: props.mode === "dark" ? "#0e5091" : "white",
          }}
          rows="8"
          value={text}
          onChange={onChangeText}
        ></textarea>
      </div>
      <div className="button-area">
        <button
          className="btn btn-primary my-1 mx-1"
          onClick={convertToUpperCase}
          disabled={text.length === 0}
        >
          Convert To Uppercase
        </button>
        <button
          className="btn btn-primary my-1 mx-1"
          onClick={convertToLowerCase}
          disabled={text.length === 0}
        >
          Convert To Lowercase
        </button>
        <button
          className="btn btn-primary my-1 mx-1"
          onClick={handlerCopyText}
          disabled={text.length === 0}
        >
          Copy Text
        </button>
        <button
          className="btn btn-primary my-1 mx-1"
          onClick={handlerClearText}
          disabled={text.length === 0}
        >
          Clear Text
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={handlerRemoveExtraSpace}
          disabled={text.length === 0}
        >
          Remove Extra Space
        </button>
      </div>
      <div className="my-2">
        <h3>Text Summary</h3>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
      </div>
      <div style={{ overflowX: "auto" }}>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
