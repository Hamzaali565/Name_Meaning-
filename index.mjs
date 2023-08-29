import express from "express";
import cors from "cors";
import path from "path";
import mongoose from "mongoose";
import axios from "axios";
import cheerio from "cheerio";
import * as dotenv from "dotenv";

dotenv.config();
mongoose.set("strictQuery", false);
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

// app.use(
//   cors({
//     origin: ["http://localhost:3000", "*"],
//     credentials: true,
//   })
// );

app.get("/scrape", async (req, res) => {
  try {
    const response = await axios.get(
      "https://en.wikipedia.org/wiki/Hamza_(name)"
    );
    const html = response.data;
    const $ = cheerio.load(html);

    // Find the element(s) that contain the information you need
    const meaning = $("#mw-content-text p").first().text(); // This is just an example selector, adjust it according to the page structure

    res.json({ meaning });
  } catch (error) {
    res.status(500).json({ error: "Scraping failed" });
  }
});

///..........
// Static hosting
const __dirname = path.resolve();
app.use("/", express.static(path.join(__dirname, "./Frontend/build")));
app.use("*", express.static(path.join(__dirname, "./Frontend/build")));

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
  /////this function will run jst before app is closing
  console.log("app is terminating");
  mongoose.connection.close(function () {
    console.log("Mongoose default connection closed");
    process.exit(0);
  });
});
////////////////mongodb connected disconnected events///////////////////////////////////////////////

console.log("hello g");
