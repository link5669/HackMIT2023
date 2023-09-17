import axios from "axios";
import { useEffect, useState } from "react";

export const Transcript = (transcript: any) => {
  const [transcriptArr, setTranscriptArr] = useState([]);

  useEffect(() => {
    setTranscriptArr(transcript.transcript.split("-"));
  }, []);

  const getMoreInfo = (index) => {
    axios
      .get("http://localhost:5001/api/explain", {
        params: {
          topic: "math",
          point: transcriptArr[index],
        },
      })
      .then((response) => {
        setTranscriptArr([
          ...transcriptArr.slice(0, index + 1),
          "(*" + response.data,
          ...transcriptArr.slice(index + 1),
        ]);
      });
  };

  return (
    <div>
      {transcriptArr.map((e, index) => (
        <div
          key={index}
          style={{
            backgroundColor: "white",
            transition: "background-color 0.3s",
          }}
          onMouseEnter={(event) => {
            event.target.style.backgroundColor = "#E3E1E1";
          }}
          onMouseLeave={(event) => {
            event.target.style.backgroundColor = "white";
          }}
          onClick={() => getMoreInfo(index)}
        >
          {e &&
            (e.charAt(0) === "(" && e.charAt(1) === "*" ? (
              <div className="bg-blue-100">
                <br />- {e.substring(2)}
              </div>
            ) : (
              <>
                <br /> - {e}
              </>
            ))}
        </div>
      ))}
    </div>
  );
};
