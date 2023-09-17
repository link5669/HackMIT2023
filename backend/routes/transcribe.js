import axios from "axios";
import express from "express";
import fs from "fs";

const router = express.Router();
router.get("/", async (req, res) => {
    const { filename } = req.query
  const API_URL =
    "https://api-inference.huggingface.co/models/jonatasgrosman/wav2vec2-large-xlsr-53-english";
  const API_KEY = "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";
  const filePath = "./uploads/" + filename;

  console.log(filePath)
  async function query() {
    try {
      const data = fs.readFileSync(filePath);
      const headers = {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/octet-stream",
      };

      const response = await axios.post(API_URL, data, { headers });
      return response.data;
    } catch (error) {
      console.error("Error:", error.message);
      throw error;
    }
  }

  query()
    .then((output) => {
        console.log(output)
      res.status(200).send(output)
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
});

export default router;