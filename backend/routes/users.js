const router = require("express").Router();

let User = require("../models/user.model");

router.route("/").get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error : " + err));
});

router.route("/add").get((req, res) => {
  console.log("inside add user");
  const username = req.query.username;
  const newUser = new User({ username: username });

  newUser
    .save()
    .then(() => res.json("User added !"))
    .catch(err => res.status(400).json("Error : " + err));
});

module.exports = router;
