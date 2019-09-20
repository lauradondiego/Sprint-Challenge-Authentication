const router = require("express").Router();

const Users = require("../auth/auth-router-model");
const restricted = require("../auth/authenticate-middleware");

router.get("/", restricted, (req, res) => {
  // restricting access to get the list of users by using "restricted" middleware
  Users.find()
    .then(users => {
      res.json({ users, loggedInUser: req.user.username });
    })
    .catch(err => res.send(err.message));
});

module.exports = router;
