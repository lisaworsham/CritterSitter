module.exports = function(sequelize, DataTypes) {    
    const tripCheckIn = sequelize.define('tripCheckIn', {
        Comments: {
            type: DataTypes.TEXT,
            allowNull: true
        }, 
        timestamps: true,
        createdAt: true
    });
    tripCheckIn.associate = function(models) {
        tripCheckIn.belongsTo(models.trip, {
          foreignKey: {
            allowNull: false
          }
        });
      };
    return tripCheckIn
}