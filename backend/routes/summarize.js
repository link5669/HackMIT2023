import axios from "axios"
import express from "express"

const router = express.Router();
router.get("/", async (req, res) => {
    const apiUrl = 'https://us-south.ml.cloud.ibm.com/ml/v1-beta/generation/text?version=2023-05-29';


    const { transcript } = req.query
    console.log(transcript)
    const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': 'Bearer eyJraWQiOiIyMDIzMDkwODA4MzQiLCJhbGciOiJSUzI1NiJ9.eyJpYW1faWQiOiJJQk1pZC02OTEwMDA0UTRIIiwiaWQiOiJJQk1pZC02OTEwMDA0UTRIIiwicmVhbG1pZCI6IklCTWlkIiwianRpIjoiZjY3NDc3MjEtM2FmOC00NzI3LTg1OTctMWUzN2M4ZGM4YzNiIiwiaWRlbnRpZmllciI6IjY5MTAwMDRRNEgiLCJnaXZlbl9uYW1lIjoiTWlsZXMiLCJmYW1pbHlfbmFtZSI6IkFjcXVhdml2YSIsIm5hbWUiOiJNaWxlcyBBY3F1YXZpdmEiLCJlbWFpbCI6Im1kYTE0NEBzY2FybGV0bWFpbC5ydXRnZXJzLmVkdSIsInN1YiI6Im1kYTE0NEBzY2FybGV0bWFpbC5ydXRnZXJzLmVkdSIsImF1dGhuIjp7InN1YiI6Im1kYTE0NEBzY2FybGV0bWFpbC5ydXRnZXJzLmVkdSIsImlhbV9pZCI6IklCTWlkLTY5MTAwMDRRNEgiLCJuYW1lIjoiTWlsZXMgQWNxdWF2aXZhIiwiZ2l2ZW5fbmFtZSI6Ik1pbGVzIiwiZmFtaWx5X25hbWUiOiJBY3F1YXZpdmEiLCJlbWFpbCI6Im1kYTE0NEBzY2FybGV0bWFpbC5ydXRnZXJzLmVkdSJ9LCJhY2NvdW50Ijp7InZhbGlkIjp0cnVlLCJic3MiOiI3YjJjZGRmZGE0ZTE0M2Q5YTAxM2RkNjYyZmM1NmE1YyIsImltc191c2VyX2lkIjoiMTEzNjgzMzEiLCJmcm96ZW4iOnRydWUsImltcyI6IjI3MDc5NTcifSwiaWF0IjoxNjk0ODkzMjQyLCJleHAiOjE2OTQ4OTY4NDIsImlzcyI6Imh0dHBzOi8vaWFtLmNsb3VkLmlibS5jb20vaWRlbnRpdHkiLCJncmFudF90eXBlIjoidXJuOmlibTpwYXJhbXM6b2F1dGg6Z3JhbnQtdHlwZTphcGlrZXkiLCJzY29wZSI6ImlibSBvcGVuaWQiLCJjbGllbnRfaWQiOiJkZWZhdWx0IiwiYWNyIjoxLCJhbXIiOlsicHdkIl19.10tzituHAd3Trp7NQ7v9KJuqHXvYu78iK1jBuXcCOFv-og6sJV0qyjgZxpJeeZ6oymyG6Nq88_DpH-ZT56LHA3QmlpVhdRqUMa7FTfoNJZumsBkSjpiKwdKrrbCc4xRNT2rLuCog7q7A1xWwv8P2i-jQVtfpEQpYF17wUJwEScshdOg-BL_unfHr3zxqIoNI7Q_T87ugnrwhyMvKwixSOwhK5ke7whLqfhT9EHuEAmQFu7zXUnqP5yQiI8WT0PpoqBuHjJyodosQTLbTLJw5QLPv2SMbwe0egxMklmf5szaHsFjVheqk3BPdc15mryLo4MjIi-rB5o4JBUYC3t-m3g'
    }
    const requestData = {
    "model_id": "google/flan-ul2",
    "input": `This is a transcript from a college lecture. Summarize the entire lecture using multiple bullet points\
     \\n\\nQuestion:\\nSo, of course, there's two different things as always. There is the region of integration and there's \
     the function we are integrating. Now, the function we are integrating, well, it will come in handy when you actually try to \
     evaluate the integral. But, as you can see, probably, the new part is really hard to set it up. So, the function won't really \
     matter that much for me. So, in the examples I'll do today, functions will be kind of silly. So, for example, let's say that \
     we want to look at the region between two paraboloids, one given by z = x ^2 y ^2.\\n\\nAnswer:\\n- The lecture discusses two \
     important elements in integration: the region of integration and the function being integrated.\\n- The focus of the lecture \
     is primarily on the region of integration and how to set it up.\\n- The lecturer mentions that the function being integrated \
     will become more important when actually evaluating the integral.\\n- The lecture suggests that, for the examples covered that \
     day, the functions being integrated will not be very complex or significant.\\n- An example problem is introduced, involving \
     the region between two paraboloids, specifically one defined by the equation z = x^2y^2.\\n\\nQuestion:\\nSo, what does that \
     look like? Well, z = x ^2 y ^2, that's one of our favorite paraboloids. That's something that looks like a parabola with its \
     bottom at the origin that you spin about the z axis. And, z equals four minus x squared minus y squared, well, that's also a \
     paraboloid. But, this one is pointing down, and when you take x equals y equals zero, you get z equals four. So, it starts at \
     four, and it goes down like that. OK, so the solid that we'd like to consider is what's in between in here. So, it has a curvy \
     top which is this downward paraboloid, a curvy bottom which is the other paraboloid.\\n\\nAnswer:\\n- The lecture focuses on \
     describing two different paraboloids.\\n- The first paraboloid is represented by the equation z = x^2y^2 and is described as \
     having a shape similar to a parabola with its vertex at the origin, which is then spun about the z-axis.\\n- The second \
     paraboloid is represented by the equation z = 4 - x^2 - y^2 and is characterized as another paraboloid but with a downward \
     orientation. It starts at a z-value of 4 and decreases from there.\\n- The lecturer highlights that the solid of interest is \
     the region between these two paraboloids, which consists of a curved top surface (the downward paraboloid) and a curved bottom \
     surface (the other paraboloid).\\n\\nQuestion:\\nSo -- OK, so first of all, about the exam, so you have some statistics up there. \
     The class median was 84. So, most of you did pretty well. Passing was 65. If you want to know roughly speaking where you stand, \
     I'd say that 90 or above corresponds to an A. 80 or above corresponds to a B. 65 or above corresponds to a C. But, again, I mean, \
     nothing is set in stone. That depends a lot on how you do on homework, and things like that. So, don't take these values too \
     seriously. If you got less than 65, then you should definitely take and make up, and also if you were absent for some reason \
     yesterday.\\n ${transcript} \\n\\nAnswer:\\n`,
    "parameters": {
        "decoding_method": "greedy",
        "max_new_tokens": 100,
        "min_new_tokens": 0,
        "stop_sequences": [],
        "repetition_penalty": 1
    },
    "project_id": "9a87b0b3-3cd9-4b66-b54a-bc30df9edcf5"
    };

    axios.post(apiUrl, requestData, { headers })
    .then(function (response) {
        // res.set('Access-Control-Allow-Origin', '*')
        res.status(200).send(response.data.results[0].generated_text)
        console.log('Response:', response.data);
    })
    .catch(function (error) {
        console.error('Error:', error);
    });
})

export default router