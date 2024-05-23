const path = require("path");
const express = require("express");
// const bodyParser = require("body-parser");
const app = express();

const PORT = process.env.PORT || 8000;

const dbConnect = require("./db/dbConnect");
const user_routes = require("./routes/user.routes");

// first we have to set which view engine we are using
app.set("view engine", "ejs");
// now we have to set its path
app.set("views", path.resolve("./views"));

app.use(express.json({limit: "16kb"}))
// app.use(bodyParser.json());
app.use(express.urlencoded({extended: true, limit: "16kb"}))



app.use("/api/user", user_routes);

app.get("/", (req, res) => {
  res.send("Hello HOME ");
});

const start = async () => {
  await dbConnect();
  app.listen(PORT, () => {
    console.log(`server is running at port:http://localhost:${PORT}`);
  });
};

start();
