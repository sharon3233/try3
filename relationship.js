const {sequelize, DataTypes, Model} = require('./sequelize.index');

const { Pet } = require('./pet');
const { Owner } = require('./owner');


//Create our Association!
Pet.belongsTo(Owner) //adds a foreign key on the musician table, for the band they belong to
Owner.hasMany(Pet) //gives us Sequelize magic methods

module.exports = { Pet, Owner };