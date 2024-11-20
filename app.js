const express = require("express");
const app = express();
const port = 3000;

var pgp = require("pg-promise")(/*options*/);
var db = pgp("postgres://postgres:Vault1024!@35.222.127.255/test");

app.get("/", async (req, res) => {
  await db
    .manyOrNone("SELECT * FROM post")
    .then(function (data) {
      res.send(data);
      return;
    })
    .catch(function (error) {
      res.send(error);
      return;
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
