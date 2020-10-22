// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const { brotliDecompress } = require("zlib");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");
const db = require("../models");

module.exports = function (app) {
  app.get("/", (req, res) => {
    res.render("index");
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
    db.petProfile.findAll({
      where: {
        OwnerId: req.user.id
      }
    }).then(petList => {
      db.trip.findAll({
        where: {
          OwnerId: req.user.id
        },
        include: {
          model: db.User,
          as: "Sitter"
        }
      }).then(tripList => {
        res.render("owner", {
          trips: tripList.map(trips => trips.toJSON()),
          pets: petList.map(pets => pets.toJSON())
        })
      })
    })
  });

  app.get("/pet-info", (req, res) => {
      db.petProfile.findAll({
        where: {OwnerId: req._parsedOriginalUrl.query},
        include: {
          model: db.User,
          as: "Owner"
        }
      }).then(petList => {
        res.render("petinfo", {pets: petList.map(pets => pets.toJSON())})
      })
  });

  app.get("/newpet", isAuthenticated, (req, res) => {
    res.render("addpet");
  });

  app.get("/ownerCheckin", isAuthenticated, (req, res) => {
    res.render("ownerCheckin");
  });

  app.get("/new-trip", isAuthenticated, (req, res) => {
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
    db.trip.findAll({
      where: {
        SitterID: req.user.id
      },
      include: {
        model: db.User,
        as: "Owner"
      }
    }).then(tripList => {
      res.render("sitter", { trips: tripList.map(trips => trips.toJSON()) });
    });
  });

  app.get("/sitterCheckin", isAuthenticated, (req, res) => {
    res.render("sitterCheckIn");
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

  app.get("/members", isAuthenticated, (req, res) => {
    const owner = req.user.PetOwner
    const sitter = req.user.PetSitter
    if (owner && !sitter) {
      res.redirect("/owner");
    } else if (sitter && !owner) {
      res.redirect("/sitter");
    }
  });
};
