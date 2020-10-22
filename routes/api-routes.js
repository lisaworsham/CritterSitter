// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");
require('dotenv').config();
const nodemailer = require('nodemailer');

module.exports = function (app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // console.log(req.user)
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.body.email,
      // role: req.body.userRole
      // id: req.user.id
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", (req, res) => {
    // console.log(req.body);
    db.User.create({
      Email: req.body.email,
      UserPassword: req.body.password,
      FirstName: req.body.firstName,
      LastName: req.body.lastName,
      PhoneNum: req.body.phoneNumber,
      ZipCode: req.body.zipCode,
      PetOwner: (req.body.userRole === "pet-owner") ? true : false,
      PetSitter: (req.body.userRole === "pet-sitter") ? true : false
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch(err => {
        // console.log(err);
        // console.log("hello");
        res.status(401).json(err);
      });
  });

  app.post("/api/newtrip", (req, res) => {
    console.log(req.body)
    db.trip.create({
      TripName: req.body.TripName,
      FromDate: req.body.FromDate,
      ToDate: req.body.ToDate,
      EmergencyContact: req.body.EmergencyContact,
      Comments: req.body.Comments,
      OwnerId: req.body.OwnerId,
      SitterId: req.body.SitterId
    })
      .then(() => {
        console.log("Successfully created new trip");
        res.redirect("/members")
      })
      .catch(err => {
        console.log(err)
        res.status(401).json(err);
      })
  })

  // Sitter Checkin
  app.get("/api/sitterCheckin", (req, res) => {
    db.User.findOne({ where: { id: req.id } }).then(res.redirect("/sitterCheckin"))
    // console.log(req)
  })

  app.post("/api/email", (req, res) => {
    // console.log(req.body)
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: "critter.sitter.safe@gmail.com",
        pass: "CritterSitter#"
      }
    })
    // const sendMail = (email, subject, text, cb) => {
    //step 2 - e-mail
    let mailOptions = {
      from: "critter.sitter.safe@gmail.com",
      to: req.body.address,
      subject: "Critter Sitter Update",
      text: req.body.message
    };

    // }
    // step 3 - send mail
    transporter.sendMail(mailOptions, function (err, data) {
      if (err) {
        cb(err, null);
        console.log('error!!! oh no!', err);
      } else {
        cb(null, data);
        console.log('email sent!!!');
      }
    })
  });


  // New Pet
  app.post("/api/newPet", (req, res) => {
    console.log(req.body)
    db.petProfile.create({
      PetName: req.body.PetName,
      PetType: req.body.PetType,
      Food: req.body.Food,
      FoodAmt: req.body.FoodAmt,
      VetInfo: req.body.VetInfo,
      Comments: req.body.Comments,
      OwnerId: req.body.OwnerId
    })
      .then(() => {
        console.log("Successfully created new pet");
        res.redirect("/members")
      })
      .catch(err => {
        console.log(err)
        res.status(401).json(err);
      })
  })

  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      // console.log(req);
      res.json({
        email: req.user.Email,
        id: req.user.id
      });
    }
  });
};
