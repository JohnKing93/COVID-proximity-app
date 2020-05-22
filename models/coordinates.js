module.exports = function(sequelize, DataTypes) {
  var Coordinates = sequelize.define("Coordinates", {
    lat: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    long: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  return Coordinates;
};