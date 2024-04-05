import express from "express";
import dotenv from "dotenv";

import authroutes from "./routes/auth.routes.js"
import connectToMongoDB from "./db/connectToMongoDb.js";

dotenv.config({ path: "./.env" });
const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.use("/api/auth", authroutes)

// app.get("/", (req, res) => {
//   res.send("Hello world!");
// });

app.listen(PORT, (req, res) => {
  connectToMongoDB()
  console.log(`Server is running on port number ${PORT}`);
});
