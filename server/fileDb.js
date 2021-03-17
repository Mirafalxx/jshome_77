const e = require("express");
const fs = require("fs");
const { nanoid } = require("nanoid");

const fileName = "./db.json";
let data = [];

module.exports = {
  init() {
    try {
      const fileConent = fs.readFileSync(fileName);
      data = JSON.parse(fileConent);
    } catch (e) {
      data = [];
    }
  },
  addItem(item) {
    item.id = nanoid();
    data.push(item);
    this.save();
  },
  save() {
    fs.writeFileSync(fileName, JSON.stringify(data, null, 2));
  },
};
