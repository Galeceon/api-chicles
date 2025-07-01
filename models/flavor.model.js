const { DataTypes } = require('sequelize');
const { sequelize } = require('./index');
const Gum = require('./gum.model');

const Flavor = sequelize.define('Flavor', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Gum.hasMany(Flavor, { as: 'flavors' });
Flavor.belongsTo(Gum);

module.exports = Flavor; 