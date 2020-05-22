module.exports = function(sequelize, DataTypes) {
  var Coordinates = sequelize.define("Coordinates", {
    lat: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    long: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  });
  return Coordinates;
};