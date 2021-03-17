const express = require("express");
const fileDb = require("../fileDb");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("all is good");
});

router.post("/new", (req, res) => {
  if (req.body.author === "" || req.body.message === "")
    return res.status(400).send("Occurred error while adding message");

  fileDb.addItem(req.body);
  return res.send(req.body);
});
module.exports = router;
