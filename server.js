const express = require("express");
const exphbs = require("express-handlebars");
const handlebars = require("handlebars");
// const compression = require("compression");
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

//Compression
// app.use(compression());

// Configure express-handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
    handlebars: allowInsecurePrototypeAccess(handlebars),
  })
);
app.set("view engine", "handlebars");

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

app.use(roomController);


// API Routes
app.get("/api/rooms", (req, res) => {
  res.json({
    success: true,
  });
});

app.post("/api/rooms", (req, res) => {
  console.log(req.body);

});


//GET view route to show the create new room form
app.get("/new", (req, res) => {
  res.render("new-room");
});

app.get("/room/:id", (req, res) => {
  res.render("edit-room");
});

// Syncs the Sequelize models, MySQL reserve_db, and website to keep track of user input
// db.sequelize.sync({ force: true }).then(() => {
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`);
  });
});
