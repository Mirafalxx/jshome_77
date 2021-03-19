const express = require("express");
const fileDb = require("../fileDb");
const router = express.Router();

router.get("/", (req, res) => {
  const treds = fileDb.getItem();
  res.send(treds);
});

router.post("/new", (req, res) => {
  if (req.body.author === "" || req.body.message === "")
    return res.status(400).send("Occurred error while add tred");

  fileDb.addItem(req.body);
  return res.send(req.body);
});
module.exports = router;
