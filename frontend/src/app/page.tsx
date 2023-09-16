"use client";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { Transcript } from "./components/transcript";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [response, setResponse] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    axios
      .get("http://localhost:5001/api/summarize", {
        params: {
          transcript: inputValue,
        },
      })
      .then((e) => {
        setResponse(e.data);
      });
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
          href="#"
          className="inline-flex content-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        >
          Learn more
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
      <br />
      <div className="flex justify-center">
        <br />
        <input
          value={inputValue}
          onChange={handleInputChange}
          className="shadow appearance-none border rounded text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <button className="p-l2" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      {response && (
          <Transcript transcript={response} />
      )}
    </>
  );
}
