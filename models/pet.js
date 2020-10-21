module.exports = function (sequelize, DataTypes) {
    const petProfile = sequelize.define('petProfile', {
        PetName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        PetType: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Food: {
            type: DataTypes.STRING,
            allowNull: false
        },
        FoodAmt: {
            type: DataTypes.STRING,
            allowNull: false
        },
        VetInfo: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Comments: {
            type: DataTypes.TEXT,
            allowNull: true
        },


    },
        {
            freezeTableName: true
        }
    );
    petProfile.associate = function (models) {
        petProfile.belongsTo(models.User, {
            as: "Owner"
        });
    };
    // petProfile.associate = function (models) {
    //     petProfile.hasMany(models.trip, {
    //         onDelete: "cascade"
    //     });
    // };
    return petProfile
}