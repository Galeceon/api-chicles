const { DataTypes } = require('sequelize');
const { sequelize } = require('./index');

const Gum = sequelize.define('Gum', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Gum; 