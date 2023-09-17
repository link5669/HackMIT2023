import axios from "axios";
import express from "express";

import { OpenAI } from "openai";

import * as dotenv from 'dotenv';
dotenv.config();

const router = express.Router();
router.get("/", async (req, res) => {
  async function query() {
    const lecture = req.query.transcript

    const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY,});
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{"role": "user", "content": `Summarize the following lecture using bullet points: ${lecture}`}],
    });
    return JSON.stringify(response.choices[0].message.content);
  }
  query()
    .then((output) => {
      res.status(200).send(output)
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
});

export default router;