const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const { uploadOnCloudinary } = require("./config/cloudinary");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { ConnectMongoDB } = require(".//config/connection");
const app = express();
app.use(cors());
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT =  2025;
const MONGO_URL = "mongodb://localhost:27017/ai_project4"
ConnectMongoDB(MONGO_URL)
  .then(() => {
    console.log("DATABASE CONNECTED SUCCESSFULLY");
  })
  .catch((error) => {
    console.log("mongoose error", error);
  });


        

//add_routes_here
app.listen(PORT, () => {
  console.log(
    "Server has been started at link: " + `http://localhost:${PORT}/`
  );
});


// page name as input 
// llm prints all the code 
// pasted inside controlers file 
// 2 lines app.use(/{pagename} , ./controllres/{pagename.js})