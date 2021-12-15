var express = require("express");
var cors = require("cors");
var app = express();

const Sequelize = require("sequelize");

const sequelize = new Sequelize("angular", "root", "root", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});

app.use(express.json({ type: "application/json" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// ---> Funkcia na odstránenie "sequelize" zo začiatku príkazov so slovom DataTypes

const { DataTypes } = Sequelize;

// ---> Testovanie pripojenia s databázou

async function authenticate() {
  try {
    await sequelize.authenticate();
    console.log("Connection ready!");
  } catch (e) {
    console.log("Error!");
  }
}
authenticate();

// ---> Vytvorenie servera

app.listen(4546);

// REQUESTY

// ---> Images

app.get("/images", function (req, res) {
  sequelize
    .query("SELECT * FROM angular.images ORDER BY id DESC")
    .then((myTableRows) => {
      res.json(myTableRows[0]);
    });
});

// ---> Uploaders

app.get("/uploaders", function (req, res) {
  sequelize
    .query("SELECT * FROM angular.uploaders ORDER BY imagesCount DESC")
    .then((myTableRows) => {
      res.json(myTableRows[0]);
    });
});
