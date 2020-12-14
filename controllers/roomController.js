const express = require("express");
const router = express.Router();

const db = require("../models");

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

router.post("/api/rooms", (req, res) => {
  db.Room.create(req.body)
    .then((newRoom) => {
      res.json(newRoom);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.put("/api/rooms/:id", (req, res) => {
  db.Room.update(req.body, {
    where: {
      id: req.params.id,
    }
  })
    .then((updatedRoom) => {
      res.redirect("/rooms");
    })
    .catch((err) => {
      console.log(err);
    });
});

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