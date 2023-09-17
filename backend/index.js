import express from "express";
import cors from "cors";
import summarizeRouter from "./routes/summarize.js";
import transcribeRouter from "./routes/transcribe.js";
import explainRouter from "./routes/explain.js";
import uploadRouter from "./routes/upload.js";

const port = 5001;
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/", (req, res) => {
  res.json({ message: "Hello world!" });
});

app.use("/api/transcribe", transcribeRouter);
app.use("/api/summarize", summarizeRouter);
app.use("/api/explain", explainRouter);
app.use("/api/upload", uploadRouter);
app.listen(port, () => console.log(`Server listening on port ${port}`));
