const express = require("express");
require("dotenv").config();
const dbConnect = require("./config/dbConnect");

dbConnect();

const app = express();

//MIddleware
app.use(express.json());

//Routes

//Start the server
const PORT = process.env.PORT || 7002;
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});