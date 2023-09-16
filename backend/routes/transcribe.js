import axios from "axios"
import express from "express"

const router = express.Router();
router.get("/", async (req, res) => {
    const apiUrl = 'https://api-inference.huggingface.co/models/jonatasgrosman/wav2vec2-large-xlsr-53-english';

    const { data } = req.read()
    const headers = {
        "Authorization": "Bearer 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"
    };

    axios.post(apiUrl, headers=headers, data=data)
    .then(function (response) {
        res.status(200).send(response.json)
        console.log('Response:', response.json);
    })
    .catch(function (error) {
        console.error('Error:', error);
    });
})

export default router