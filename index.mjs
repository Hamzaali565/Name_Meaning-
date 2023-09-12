import express from "express";
import cors from "cors";
import path from "path";
import mongoose, { Error } from "mongoose";
import axios from "axios";
import cheerio from "cheerio";
import * as dotenv from "dotenv";
import { error } from "console";

dotenv.config();
mongoose.set("strictQuery", false);
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:3000", "*"],
    credentials: true,
  })
);
const nameWise = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  gender: { type: String, required: true },
  meaning: { type: String, required: true },
  createdOn: { type: Date, default: Date.now },
});
export const nameWiseModel = mongoose.model("nameWise", nameWise);

app.get("/scrape", async (req, res) => {
  console.log(req.query.link);
  let link = req.query.link;
  try {
    const response = await axios.get(`${link}`);
    const html = response.data;
    const $ = cheerio.load(html);

    // Find the element(s) that contain the information you need
    const meaning = $("#mw-content-text p").first().text(); // This is just an example selector, adjust it according to the page structure

    res.json({ meaning });
  } catch (error) {
    res.status(500).json({ error: "Scraping failed" });
  }
});

app.post("/api/v1/nameWise", async (req, res) => {
  try {
    let body = req.body;
    const { name, category, meaning, gender } = body;
    if (![name, meaning, category, gender].every(Boolean))
      throw new Error("All Parameters Are Required");
    let saveResponse = await nameWiseModel.create({
      category,
      name,
      meaning,
      gender,
    });
    res.status(200).send({ message: `Data Inserted Successfully` });
    console.log(saveResponse);
  } catch (error) {
    res.status(404).send({ message: `${error.message}` });
  }
});

app.get("/api/v1/getallNames", async (req, res) => {
  const { category } = req.body;
  try {
    if (!category) throw new Error("Category is required");
    let response = await nameWiseModel.find({ category }).exec();
    console.log(response);
    if (response.length < 1) throw new Error("Data Not Found");
    res.status(200).send({ data: response });
  } catch (err) {
    res.status(404).send({ message: `${err.message}` });
  }
});
app.get("/api/v1/genderWiseNames", async (req, res) => {
  console.log("body", req.query);
  const { category, gender } = req.query;
  try {
    if (![category, gender].every(Boolean))
      throw new Error("Parameter of Category and Gender is required");
    let response = await nameWiseModel.find({ category, gender }).exec();
    console.log(response);
    if (response.length < 1) throw new Error("Data Not Found");
    res.status(200).send({ data: response });
  } catch (err) {
    res.status(404).send({ message: `${err.message}` });
  }
});
///..........
// Static hosting
const __dirname = path.resolve();
app.use("/", express.static(path.join(__dirname, "./meaning/build")));
app.use("*", express.static(path.join(__dirname, "./meaning/build")));

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// Mongoose setup and event handling...

// --- mongoose things ---- //
const MONGODB_URI = process.env.MONGODB_URI;

/////////////////////////////////////////////////////////////////////////////////////////////////
mongoose.connect(MONGODB_URI);

////////////////mongodb connected disconnected events///////////////////////////////////////////////
mongoose.connection.on("connected", function () {
  //connected
  console.log("Database is connected");
});

mongoose.connection.on("disconnected", function () {
  //disconnected
  console.log("Mongoose is disconnected");
  process.exit(1);
});

mongoose.connection.on("error", function (err) {
  //any error
  console.log("Mongoose connection error: ", err);
  process.exit(1);
});

process.on("SIGINT", function () {
  /////this function will run just before the app is closing
  console.log("app is terminating");
  mongoose.connection.close(); // Remove the callback function here
  console.log("Mongoose default connection closed");
  process.exit(0);
});
////////////////mongodb connected disconnected events///////////////////////////////////////////////

console.log("hello g");
