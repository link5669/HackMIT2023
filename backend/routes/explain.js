import axios from "axios";
import express from "express";

import { OpenAI } from "openai";

import * as dotenv from 'dotenv';
dotenv.config();

const router = express.Router();
router.get("/", async (req, res) => {
  async function query() {
    const { topic } = req.topic;
    const { point } = req.point;

    const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY,});
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{"role": "user", "content": `Explain the following point from a lecture about ${topic} to me within 20 words: ${point}`}],
    });
    return JSON.stringify(response.choices[0].message.content);
  }
  query()
    .then((output) => {
      console.log(output);
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
});

export default router;