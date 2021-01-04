const express = require("express");
const router = express.Router();
const connection = require("../connection");

router.get("/", (req, res) => {
  connection.query("SELECT * from user", (err, rows) =>{
    if (err) {
      throw err;
    } else {
      console.log(rows);
    }
  });
});

module.exports = router;
