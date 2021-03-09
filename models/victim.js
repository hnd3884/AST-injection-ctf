'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Victim extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Victim.belongsTo(models.Ransomware, {
        foreignKey: 'ransomwareId',
        onDelete: 'CASCADE'
      })
    }
  };
  Victim.init({
    hostname: DataTypes.STRING,
    ipAddress: DataTypes.STRING,
    email: DataTypes.STRING,
    ransomwareId: DataTypes.INTEGER,
    ransomSum: DataTypes.INTEGER,
    hasPaid: DataTypes.BOOLEAN,
    encyptionKey: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Victim',
  });
  return Victim;
};