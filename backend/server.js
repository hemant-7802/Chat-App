import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

const PORT = process.env.PORT;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(PORT, (req, res) => {
  console.log(`Server is running on port number ${PORT}`);
});
