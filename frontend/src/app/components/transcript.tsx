import axios from "axios";
import { useEffect, useState } from "react";

export const Transcript = (transcript: any) => {
  transcript = `The lecture discusses determining the bounds for the variable x in the context of slicing a solid by lines parallel to the x axis. - Finding the values of x at the front and back can be challenging, but it's easier to first identify the values of z at the top and bottom. - The choice between dy dx or dx dy for integration order appears to be random, as x and y have symmetric roles in the problem. - Setting up the bounds for z is recognized as the first step in simplifying the problem. - The lecture hints at the possibility of using cylindrical coordinates for the integration process, suggesting that this approach may be more efficient than using xy coordinates.`;
  const [transcriptArr, setTranscriptArr] = useState([])
  
  useEffect(() => {
    setTranscriptArr(transcript.split("-"))
  })

  const getMoreInfo = (index) => {
    axios.get("http://localhost:5001/api/explain", {
      params: {
        topic: "math",
        point: transcript[index]
      },
    }).then((e) => {
        console.log(e.data)
        // setTranscriptArr([...transcript.slice(0,index), e.data, ...transcript.slice(index)])
    })
  };
  return (
    <div>
      {transcriptArr.map((e, index) => (
        <div
          key={index}
          style={{
            backgroundColor: "white", // Initial background color
            transition: "background-color 0.3s", // Smooth transition
          }}
          onMouseEnter={(event) => {
            event.target.style.backgroundColor = "gray"; // Change background on hover
          }}
          onMouseLeave={(event) => {
            event.target.style.backgroundColor = "white"; // Revert background on hover exit
          }}
          onClick={getMoreInfo(index)}
        >
          <br /> - {e}
        </div>
      ))}
    </div>
  );
};
