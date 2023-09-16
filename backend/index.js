import express from "express";
import cors from "cors";
import summarizeRouter from "./routes/summarize.js"
import transcribeRouter from "./routes/transcribe.js"

const port = 5001;
const app = express();

const corsConfig = {
  origin: "http://localhost:5001",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsConfig));

app.get("/", (req, res) => {
  res.json({ message: "Hello world!" });
});

app.use("/api/transcribe", )
app.use("/api/summarize", summarizeRouter);
app.listen(port, () => console.log(`Server listening on port ${port}`));