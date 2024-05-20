
const express = require("express");
const app = express();
const port = 2020;

const {getCountries} = require("./controller/getCountries")

app.get("/", getCountries);

app.get("/:id", getCountry);

app.listen(port, ()=>{
    console.log("Me gustó node");
    console.log(`nos conectamos bien en el puerto: ${port}`);
})