const {sequelize, DataTypes, Model} = require('./sequelize.index');

// Creates a Musician Table in our database
class Pet extends Model {
	//add custom methods for advanced querying
}

// Create attributes (columns) for our model
Pet.init({
	name: DataTypes.STRING, 
    breed: DataTypes.STRING,
    age: DataTypes.NUMBER
}, {
	sequelize, // What database is our table stored in
	// timestamps: false,
});

module.exports = { Pet }