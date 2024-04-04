import express from "express";
import dotenv from "dotenv";
import authroutes from "./routes/auth.routes.js"

dotenv.config({ path: "./.env" });
const PORT = process.env.PORT;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use("/api/auth", authroutes)

app.listen(PORT, (req, res) => {
  console.log(`Server is running on port number ${PORT}`);
});
