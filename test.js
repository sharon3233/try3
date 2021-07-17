const {sequelize} = require("./sequelize.index");

const {Pet, Owner} = require("./relationship")// pull them from index, where we make our association

// const {Band} = require('./Band') //why is this bad? Because our Band doesn't have an association here!

//Destructuring Syntax
// const {banana} = require('./fruit')

// const banana = require('./fruit').banana

describe ('Pet Database', () => {

	beforeAll(async () => {
		await sequelize.sync({force: true})
	})

	test('can create a pet', async() => {
		const testPet = await Pet.create({name : 'Roscoe', breed : 'Rotweiler', age : 1})
		expect(testPet.name).toBe('Roscoe')
    })
    
    test('pet age is less then 5', async () => {
        const testPet = await Pet.create({name: 'Lady', breed : 'poodle', age : 3})
        expect(testPet.age).toBeLessThan(5)
    })

    test('pet has id ', async() => {
        await sequelize.sync({force: true})
        const testPet = await Pet.create({name : 'Fluffy', breed : 'Mutt', age :  2 })
        expect(testPet.id).toBe(1)
    })

    test('Owner name is type string', async () => {
        const testOwner =await Owner.create({name : 'Kelly', email : 'kelly2raw@yahoo.com'})
        expect(typeof testOwner.name).toBe('string')
    })

    test('Owner has an length of email address 24', async () => {
        const testOwner = await Owner.create({name : 'James', email : 'jamescool@gmail.com'})
        expect(testOwner.email.length).toBeGreaterThan(10)
    })


	test('Owners can have many Pets', async () => {
		const owner = await Owner.create({name : 'Mike', email : 'mikedog2@gmail.com'})

		const dog1 = await Pet.create({name : 'Fluff', breed : 'Poodle', age : 2 });
		const dog2 = await Pet.create({name : 'POOH', breed : 'Dalmation', age : 1 });
	

		await owner.addPet(dog1) //addMusician is a 'magic method' we get from Sequelize, once we declare an association
		await owner.addPet(dog2)
		

		const pets = await owner.getPets() // another association 'magic method'

		expect(pets.length).toBe(2)
		expect(pets[0] instanceof Owner).toBeTruthy

	})

	

})