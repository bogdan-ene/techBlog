const express = require("express");
const path = require("path");
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { ConnectionString } = require("mongodb-connection-string-url");

const app = express();
const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  tls: true,
  tlsInsecure: false,
});

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("Connected to the database");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

connectToMongoDB().catch(console.dir);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/home", (req, res) => {
  res.render("home");
});
app.get("/articles", (req, res) => {
  res.render("articles");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});
app.get("/5g-article", (req, res) => {
  res.render("impact-of-5g");
});
app.post("/5g-article", (req, res) => {
  res.send("Posted a new comment on the 5G article");
});
app.put("/5g-article/:id", (req, res) => {
  const commentId = req.params.id;
  res.send(`Updated comment with ID ${commentId} on the 5G article`);
});
app.patch("/5g-article/:id", (req, res) => {
  const commentId = req.params.id;
  res.send(`Partially updated comment with ID ${commentId} on the 5G article`);
});
app.delete("/5g-article/:id", (req, res) => {
  const commentId = req.params.id;
  res.send(`Deleted comment with ID ${commentId} on the 5G article`);
});
app.get("/ai", (req, res) => {
  res.render("ai");
});
app.post("/ai", (req, res) => {
  res.send("Posted a new comment on the AI article");
});
app.put("/ai/:id", (req, res) => {
  const commentId = req.params.id;
  res.send(`Updated comment with ID ${commentId} on the AI article`);
});
app.patch("/ai/:id", (req, res) => {
  const commentId = req.params.id;
  res.send(`Partially updated comment with ID ${commentId} on the AI article`);
});
app.delete("/ai/:id", (req, res) => {
  const commentId = req.params.id;
  res.send(`Deleted comment with ID ${commentId} on the AI article`);
});
app.get("/green-energy", (req, res) => {
  res.render("green-energy");
});
app.post("/green-energy", (req, res) => {
  res.send("Posted a new comment on the Green energy and technology article");
});
app.put("/green-energy/:id", (req, res) => {
  const commentId = req.params.id;
  res.send(
    `Updated comment with ID ${commentId} on the Green energy and technology article`
  );
});
app.patch("/green-energy/:id", (req, res) => {
  const commentId = req.params.id;
  res.send(
    `Partially updated comment with ID ${commentId} on the Green energy and technology article`
  );
});
app.delete("/green-energy/:id", (req, res) => {
  const commentId = req.params.id;
  res.send(
    `Deleted comment with ID ${commentId} on the Green energy and technology article`
  );
});
app.get("/future-devices", (req, res) => {
  res.render("future-devices");
});
app.post("/future-devices", (req, res) => {
  res.send("Posted a new comment on the Devices of the future article");
});
app.put("/future-devices/:id", (req, res) => {
  const commentId = req.params.id;
  res.send(
    `Updated comment with ID ${commentId} on the Devices of the future article`
  );
});
app.patch("/future-devices/:id", (req, res) => {
  const commentId = req.params.id;
  res.send(
    `Partially updated comment with ID ${commentId} on the Devices of the future article`
  );
});
app.delete("/future-devices/:id", (req, res) => {
  const commentId = req.params.id;
  res.send(
    `Deleted comment with ID ${commentId} on the Devices of the future article`
  );
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
