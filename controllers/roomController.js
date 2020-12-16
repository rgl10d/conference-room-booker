const express = require("express");
const router = express.Router();

const db = require("../models");

//GET Route connected to controller to get the all the rooms on the rooms.handlebars page
router.get("/rooms", (req, res) => {
  db.Room.findAll({})
    .then((allRooms) => {
      console.log(allRooms.Room);
      res.render("rooms", { rooms: allRooms });
    })
    .catch((err) => {
      console.log(err);
    });
});

//GET Route connected to controller to get the edit-room.handlebars page
router.get("/room/:id", (req, res) => {
  db.Room.findOne({
    where: {
      id: req.params.id
    }
  })
    .then((data) => {
      var string = JSON.stringify(data);
      var oneRoom = JSON.parse(string);
      res.render("edit-room", oneRoom);
      // res.json(oneRoom);
    })
    .catch((err) => {
      console.log(err);
    });
});

//POST Route connected to controller for putting newly-created rooms on the rooms.handlebars view
router.post("/api/rooms", (req, res) => {
  db.Room.create(req.body)
    .then((newRoom) => {
      res.json(newRoom);
    })
    .catch((err) => {
      console.log(err);
    });
});

//POST Route connected to controller for putting data on the index.handlebars view
router.post("/", (req, res) => {
  db.Room.create(req.body)
    .then((index) => {
      res.json(index);
    })
    .catch((err) => {
      console.log(err);
    });
});


//PUT route for updating the room that matches a certain id on the rooms.handlebars page (should be linked to a page that takes the user to another window with the room's info already displayed and ready for the user to edit)
router.put("/api/rooms/:id", (req, res) => {
  db.Room.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then((updatedRoom) => {
      res.json(updatedRoom);
    })
    .catch((err) => {
      console.log(err);
    });
});

//DELETE route for deleting the room that matches a certain id on the rooms.handlebars page
router.delete("/api/rooms/:id", (req, res) => {
  db.Room.destroy({
    where: {
      id: req.params.id
    }
  })
    .then((response) => {
      console.log(response);
      res.json(response);
    })
    .catch((err) => {
      console.log(err);
    })
});

module.exports = router;

router.get("/new", (req, res) => {
  res.render("new-room");
})