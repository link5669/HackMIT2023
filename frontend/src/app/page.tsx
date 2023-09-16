"use client"
import React from "react";
import { useState } from "react";
import axios from "axios"

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [response, setResponse] = useState("")

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    axios.get("http://localhost:5001/api/summarize", {
      params: {
        transcript: inputValue
      }
    }).then((e) => {
      setResponse(e.data)
    })
  }

  return (
    <>
      <input
        type="text"
        id="textInput"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>submit</button>
      <p>{response}</p>
    </>
  );
}
