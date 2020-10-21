// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
const bcrypt = require("bcryptjs");
// Creating our User model
module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("User", {
    // The email cannot be null, and must be a proper email before creation
    Email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    // The password cannot be null
    UserPassword: {
      type: DataTypes.STRING,
      allowNull: false
    },
    FirstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    LastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    PhoneNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true
      }
    },
    ZipCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true
      }
    },
    PetOwner: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    PetSitter: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  },
    {
      freezeTableName: true
    }
  );
  // User.associate = function (models) {
  //   User.hasMany(models.trip, {
  //     as: "OwnerId",
  //     onDelete: "cascade"
  //   });
  //   User.hasMany(models.trip, {
  //     as: "PetSitterId",
  //     onDelete: "cascade"
  //   });
  // };
  // User.associate = function (models) {
  //   User.hasMany(models.petProfile, {
  //     onDelete: "cascade"
  //   });
  // };
  // User.associate = function (models) {
  //   User.hasMany(models.trip, {
  //     as: "SitterId"
  //     // onDelete: "cascade"
  //   });
  // };
  
  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function (password) {
    // console.log(password)
    return bcrypt.compareSync(password, this.UserPassword);
    // console.log(this.password)
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.addHook("beforeCreate", user => {
    // console.log("beforecreate: ", user)
    user.UserPassword = bcrypt.hashSync(
      user.UserPassword,
      bcrypt.genSaltSync(10),
      null
    );
  });

  return User;
};
