const express = require("express");
const fileupload = require("express-fileupload");
const app = express();
const cors = require('cors');
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(fileupload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));


const port =4000; // Correct the variable name to uppercase PORT
app.listen(port, () => {
    console.log(`Your app is successfully rendered at port = ${port}`);
});

const route = require("./route");
app.use("/",route); 