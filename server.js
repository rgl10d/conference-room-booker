const express = require("express");
const exphbs = require("express-handlebars");
const handlebars = require("handlebars");
const sweetalert2 = require("sweetalert2");
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");
const db = require("./models");
const app = express();

const roomController = require("./controllers/roomController");

const PORT = process.env.PORT || 8080;

// MIDDLEWARE
// Handle POST body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory to be served
app.use(express.static("public"));

// Configure express-handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
    handlebars: allowInsecurePrototypeAccess(handlebars),
  })
);
app.set("view engine", "handlebars");

// API & Views ROUTES:

// API Routes
app.get("/api/rooms", (req, res) => {
  res.json({
    success: true,
  });
});

app.post("/api/rooms", (req, res) => {
  console.log(req.body);

});


// Views Routes

app.get("/", (req, res) => {
  db.Room.findAll({})
    .then((allRooms) => {
      console.log(allRooms);
      res.render("index", { rooms: allRooms });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/", (req, res) => {
  res.render("index");
});

//GET view route to show the create new room form
app.get("/new", (req, res) => {
  res.render("new-room");
});

app.use(roomController);


// db.sequelize.sync({ force: true }).then(() => {
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`);
  });
});
