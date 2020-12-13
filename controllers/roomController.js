const express = require("express");
const router = express.Router();

const db = require("../models");

//GET Route connected to controller to get the rooms.handlebars page
router.get("/rooms", (req, res) => {
  db.Room.findAll({})
    .then((allRooms) => {
      console.log(allRooms);
      res.render("rooms", { rooms: allRooms });
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

//PUT route for updating the room that matches a certain id on the rooms.handlebars page (should be linked to a page that takes the user to another window with the room's info already displayed and ready for the user to edit)
router.put("/api/rooms/:id", (req, res) => {
  db.Room.update(req.body, {
    where: {
      id: req.params.id,
    }
  })
  .then((updatedRoom) => {
    res.json(updatedRoom)
  })
  .catch((err) => {
    console.log(err);
  });
});

//DELETE route for deleting the room that matches a certain id on the rooms.handlebars page
router.delete("/api/rooms/:id", (req, res) => {
  db.Room.destroy({
    where: {
      id: req.body.id
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

router.get("/room/new", (req, res) =>{
  res.render("new-room");
})