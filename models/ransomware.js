'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ransomware extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Ransomware.hasMany(models.Victim, {
        foreignKey: 'ransomwareId',
      })
    }
  };
  Ransomware.init({
    name: DataTypes.STRING,
    callbackIp: DataTypes.STRING,
    payload: DataTypes.TEXT,
    supportEmail: DataTypes.STRING,
    version: DataTypes.DECIMAL(10, 2)
  }, {
    sequelize,
    modelName: 'Ransomware',
  });
  return Ransomware;
};