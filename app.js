import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.status(200).json({ message: "success, server got the request" });
});

app.post("/", (req, res) => {
  const { message } = req.body;
  console.log(message);
  res.status(200).json({ message: message });
});

export default app;
