const express = require("express");
const cors = require("cors");
const  route  = require("./routes/route");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", route);

app.listen(3000, () => {
  console.log("Listening on Port 3000");
});
