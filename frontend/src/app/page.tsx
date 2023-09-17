"use client";
"use client";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { Transcript } from "./components/transcript";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [response, setResponse] = useState("");
  const [transcript, setTranscript] = useState("");
  const [summary, setSummary] = useState("");

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    axios
      .get("http://localhost:5001/api/summarize", {
        params: {
          transcript: fileName,
        },
      })
      .then((e) => {
        setResponse(e.data);
      });
  };

  const [selectedFile, setSelectedFile] = useState(null);

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("file", selectedFile);
    axios
      .post("http://localhost:5001/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        axios
          .get("http://localhost:5001/api/transcribe", {
            params: {
              filename: selectedFile.name,
            },
          })
          .then((e) => {
            setTranscript(e.data.text);
            axios
              .get("http://localhost:5001/api/summarize", {
                params: {
                  transcript: e.data.text,
                },
              })
              .then((e) => {
                console.log(e.data);
                setSummary(e.data);
              });
          });
      });
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <>
      <h1 className="mt-20 mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        LectureLens
      </h1>
      <p className="mt-10 mb-6 text-center text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        Enter your lecture here and watch as LectureLens helps you understand
        the material.
      </p>
      <div className="flex justify-center">
        {" "}
        <a
          onClick={handleUpload}
          href="#"
          className="inline-flex content-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        >
          Upload
        </a>
      </div>
      <br />
      <div className="flex justify-center">
        <input type="file" onChange={handleFileChange} />
      </div>
      {transcript && <Transcript transcript={transcript} />}
      {summary && <Transcript transcript={summary} />}
    </>
  );
}
