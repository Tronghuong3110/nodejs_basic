// const express = require('express')
import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoute from "./route/web";

const app = express()
require("dotenv").config();

const port = process.env.PORT || 8080;

// setup view engine
configViewEngine(app);
// setup router
initWebRoute(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})