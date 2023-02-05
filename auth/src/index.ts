import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/users/currentuser", (req, res) => {
  res.send("Hi there !");
});

app.listen(3000, () => {
  console.log("Auth Service Listening on PORT: 3000");
});
