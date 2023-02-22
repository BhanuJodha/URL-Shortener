const express = require("express");
const app = express();
const port = 8000;
const routes = require("./routes/index");

// initializing database
const db = require("./config/mongoose");

// parsing body data
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// adding routes
app.use("/", routes);

app.listen(port, (err)=>{
    if (err)
        return console.error("Error in starting server :", err);   
    console.log("Server is listening on port", port);
})