module.exports = function(sequelize, DataTypes) {   
   const trip = sequelize.define('trip', {
        TripName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        FromDate: {
            type: DataTypes.DATE(6),
            allowNull: false,
            validate: {
                isDate: true
            }
        },
        ToDate: {
            type: DataTypes.DATE(6),
            allowNull: false,
            validate: {
                isDate: true
            }
        },
        EmergencyContact: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Comments: {
            type: DataTypes.TEXT,
            allowNull: true
        }, 
        timestamps: true,
        createdAt: true
    });
    trip.associate = function(models) {
        trip.belongsTo(models.userTable, {
          foreignKey: {
            allowNull: false
          }
        });
      };
    trip.associate = function(models) {
        trip.belongsTo(models.petProfile, {
          foreignKey: {
            allowNull: false
          }
        });
    trip.associate = function(models) {
        trip.hasMany(models.checkIn, {
            onDelete: "cascade"
        });
        };
      };
        return trip
}