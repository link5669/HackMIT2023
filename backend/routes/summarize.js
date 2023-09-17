import axios from "axios";
import express from "express";

const router = express.Router();
router.get("/", async (req, res) => {
  const apiUrl =
    "https://us-south.ml.cloud.ibm.com/ml/v1-beta/generation/text?version=2023-05-29";

  const { transcript } = req.query;

  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization:
      "Bearer eyJraWQiOiIyMDIzMDkwODA4MzQiLCJhbGciOiJSUzI1NiJ9.eyJpYW1faWQiOiJJQk1pZC02OTEwMDA0UTRIIiwiaWQiOiJJQk1pZC02OTEwMDA0UTRIIiwicmVhbG1pZCI6IklCTWlkIiwianRpIjoiOTQ2OGNhYTItZDFjMy00MmYyLWE0MTctZTVkNWM5MGYwMjFkIiwiaWRlbnRpZmllciI6IjY5MTAwMDRRNEgiLCJnaXZlbl9uYW1lIjoiTWlsZXMiLCJmYW1pbHlfbmFtZSI6IkFjcXVhdml2YSIsIm5hbWUiOiJNaWxlcyBBY3F1YXZpdmEiLCJlbWFpbCI6Im1kYTE0NEBzY2FybGV0bWFpbC5ydXRnZXJzLmVkdSIsInN1YiI6Im1kYTE0NEBzY2FybGV0bWFpbC5ydXRnZXJzLmVkdSIsImF1dGhuIjp7InN1YiI6Im1kYTE0NEBzY2FybGV0bWFpbC5ydXRnZXJzLmVkdSIsImlhbV9pZCI6IklCTWlkLTY5MTAwMDRRNEgiLCJuYW1lIjoiTWlsZXMgQWNxdWF2aXZhIiwiZ2l2ZW5fbmFtZSI6Ik1pbGVzIiwiZmFtaWx5X25hbWUiOiJBY3F1YXZpdmEiLCJlbWFpbCI6Im1kYTE0NEBzY2FybGV0bWFpbC5ydXRnZXJzLmVkdSJ9LCJhY2NvdW50Ijp7InZhbGlkIjp0cnVlLCJic3MiOiI3YjJjZGRmZGE0ZTE0M2Q5YTAxM2RkNjYyZmM1NmE1YyIsImltc191c2VyX2lkIjoiMTEzNjgzMzEiLCJmcm96ZW4iOnRydWUsImltcyI6IjI3MDc5NTcifSwiaWF0IjoxNjk0OTUzNTY3LCJleHAiOjE2OTQ5NTcxNjcsImlzcyI6Imh0dHBzOi8vaWFtLmNsb3VkLmlibS5jb20vaWRlbnRpdHkiLCJncmFudF90eXBlIjoidXJuOmlibTpwYXJhbXM6b2F1dGg6Z3JhbnQtdHlwZTphcGlrZXkiLCJzY29wZSI6ImlibSBvcGVuaWQiLCJjbGllbnRfaWQiOiJkZWZhdWx0IiwiYWNyIjoxLCJhbXIiOlsicHdkIl19.hM3By-RgEjjW_eAJ0eh58PrjJ38y-9uiv4ZsCjVZVZeqdE6uIvk9h-54oAda8JXRy-BhFAnc0CzYKIQxW77Cf9CHemkc5OZ-gCWeYk7oaL-BALxFEdnJRutu8UVl-EkSQ8mKIX3tI-i7TnjfNz6t8lq9amONDwwSo7Brjfi6n5SkcpJE4sQOy0_Evjz1fRlTbPbM3zMoRtJEtT8uO3ac-xElMo2KshyoMbEPoToI4hcN2O7ujwVaDsIP4voiDr5RqWKTCxwzluIcvOxagGI7MtOVt3dBX11sQZQu3N1qISUHAhDY_YfhdqIwdrKNU4NPTlOPDoXycNbFvcSRuDNcGQ",
  };
  
  const requestData = {
    model_id: "google/flan-ul2",
    input: `This is a transcript from a college lecture. Summarize the entire lecture using multiple bullet points\
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
     yesterday.\\n\Input:\\nSay I'm given values of y and z. What are the bounds for x? So, that would mean I'm slicing my solid by \
     lines that are parallel to the x axis. And, see, it's kind of hard to find, what are the values of x at the front and at the back? \
     I mean, it's possible, but it's easier to actually first look for z at the top and bottom. Yes? dy dx, or dx dy? No, it's completely \
     at random. I mean, you can see x and y play symmetric roles. So, if you look at it, it's reasonably clear that z should be the easiest \
     one to set up first for what comes next. xy or yx, it's the same. Yes? Yes, it will be easier to use cylindrical coordinates. I'll get \
     to that just as soon as I'm done with this one. OK, so let's continue a bit with that. And, as you mentioned, actually we don't actually \
     want to do it with xy in the end.\\n\\nOutput:\\n- The lecture discusses determining the bounds for the variable x in the context of \
     slicing a solid by lines parallel to the x-axis.\\n- Finding the values of x at the front and back can be challenging, but it's easier \
     to first identify the values of z at the top and bottom.\\n- The choice between dy dx or dx dy for integration order appears to be \
     random, as x and y have symmetric roles in the problem.\\n- Setting up the bounds for z is recognized as the first step in simplifying \
     the problem.\\n- The lecture hints at the possibility of using cylindrical coordinates for the integration process, suggesting that this \
     approach may be more efficient than using xy coordinates.\\n\\nInput:\\nIn a few minutes, we will actually switch to cylindrical \
     coordinates. But, for now, we don't even know what they are. OK, so I've done the inner integral by looking at, you know, if I slice \
     by vertical lines, what is the top? What is the bottom for a given value of x and y? So, the bounds in the inner integral depend on \
     both the middle and outer variables. Next, I need to figure out what values of x and y I will be interested in. And, the answer for \
     that is, well, the values of x and y that I want to look at are all those that are in the shade of my region. So, in fact, to set up \
     the middle and outer bounds, what I want to do is project my solid. So, my solid looks like this kind of thing.\\n\\nOutput:\\n- The \
     lecture anticipates switching to cylindrical coordinates shortly but acknowledges that the audience might not yet be familiar with \
     them.\\n- The inner integral has been addressed by considering the bounds when slicing the solid with vertical lines, taking into \
     account both middle and outer variables.\\n- Determining the values of x and y of interest involves considering all those within the \
     shaded region.\\n- To establish the bounds for the middle and outer integrals, the lecturer plans to project the solid, visualizing \
     it as a specific shape.\\n\nQuestion:\\nDerivatives are the uhhhhh \\n\\nAnswer:\\n`,
    parameters: {
      decoding_method: "greedy",
      max_new_tokens: 100,
      min_new_tokens: 0,
      stop_sequences: [],
      repetition_penalty: 1,
    },
    project_id: "9a87b0b3-3cd9-4b66-b54a-bc30df9edcf5",
  };

  axios
    .post(apiUrl, requestData, { headers })
    .then(function (response) {
      res.set("Access-Control-Allow-Origin", "*");
      res.status(200).send(response.data.results[0].generated_text);
      console.log("Response:", response.data);
    })
    .catch(function (error) {
      console.error("Error:", error);
    });
});

export default router;
