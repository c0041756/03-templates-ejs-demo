const express = require("express");

const router = express.Router();

module.exports = () => {
  router.get("/example", (req, res) => {
    return res.render("example", {
      title: "EJS Kenny's Title",
      message: "Nice to see you again",
      myHeading: "Heading",
      myHeading2: "Help Me"
    });
  });

  // adds dogs route

  router.get("/dogs", (req, res) => {
    var dogJson = [
      { name: "Fido", breed: "Border Terrier", childFriendly: true },
      { name: "Butch", breed: "Poodle", childFriendly: true },
      { name: "Patch", breed: "Poodle", childFriendly: false }
    ];

    return res.render("dogs-loop", {
      title: "Looping Data with EJS",
      dogs: dogJson
    });
  });

  // add main route
  router.get("/main", (req, res) => {
    return res.render("main", {
      title: "EJS Example from Parts",
      message: "Hello Template built in parts",
      showMsg: true,
      headingOne: "Page made from parts"
    });
  });

  return router;
};
