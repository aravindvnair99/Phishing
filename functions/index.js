const functions = require("firebase-functions");
const express = require("express");
const app = express();

app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (_req, res) => {
	res.render("index");
});

app.use((_req, res, next) => {
	res.status(404).render("404");
});

exports.app = functions.https.onRequest(app);
