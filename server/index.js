const express = require("express");
const cors = require("cors");
const app = express();

const message = require("./app/message");
const fileDb = require("./fileDb");

app.use(express.json());
app.use(cors());

fileDb.init();
const port = 8000;

app.use("/messages", message);

app.listen(port, () => {
  console.log(`Server started on  ${port} port`);
});
