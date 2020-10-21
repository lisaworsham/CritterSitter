// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const { brotliDecompress } = require("zlib");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");
const db = require("../models");

module.exports = function (app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    // if (req.user) {
    //   res.redirect("/members");
    // }
    res.render("index");
    // res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", (req, res) => {
    res.render("login");
    // If the user already has an account send them to the members page
    // if (req.user) {
    //   res.redirect("/members");
    // }
    // res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/signup", (req, res) => {
    res.render("signup");
  });

  app.get("/owner", isAuthenticated, (req, res) => {
    console.log(req.user);
    res.render("owner");
  });

  app.get("/pet-info", (req, res) => {
    res.render("petinfo");
  });

  app.get("/newpet", (req, res) => {
    res.render("addpet");
  });

  app.get("/owner-checkin", (req, res) => {
    res.render("ownerCheckin");
  });

  app.get("/new-trip", (req, res) => {
    db.User.findAll({
      where: {
        PetSitter: true
      }
    }).then(sittersList => {
      res.render("newtrip", { sitters: sittersList.map(sitters => sitters.toJSON()) });
    });
    // console.log(res)
  });

  app.get("/sitter", isAuthenticated, (req, res) => {
    // console.log(req.user)
    db.trip.findAll({
      where: {
        SitterID : req.user.id
      },
      include: {
        model: db.User,
        as: "Owner"
      }
    }).then(tripList => {
      // console.log(tripList)
      res.render("sitter", { trips: tripList.map(trips => trips.toJSON()) });
    });
    // res.render("sitter");
  });

  app.get("/sitterCheckin", (req, res) => {
    // console.log(req)
    // res.render("sitterCheckIn");
  });

  app.get("/services", (req, res) => {
    res.render("services");
  });

  app.get("/about", (req, res) => {
    res.render("about");
  });

  app.get("/support", (req, res) => {
    res.render("support");
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, (req, res) => {
    // console.log(req.user)
    const owner = req.user.PetOwner
    const sitter = req.user.PetSitter
    if (owner && !sitter) {
      res.redirect("/owner");
    } else if (sitter && !owner) {
      res.redirect("/sitter");
    }
    // res.sendFile(path.join(__dirname, "../public/members.html"));
  });
};
