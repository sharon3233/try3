const {sequelize, DataTypes, Model} = require('./sequelize.index');

// Creates a Musician Table in our database
class Owner extends Model {
	//add custom methods for advanced querying
}

// Create attributes (columns) for our model
Owner.init({
	name: DataTypes.STRING, 
	email: DataTypes.STRING
}, {
	sequelize, // What database is our table stored in
	// timestamps: false,
});

module.exports = { Owner }