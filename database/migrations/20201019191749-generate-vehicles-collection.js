const faker = require('faker');

const collection = 'vehicles';

module.exports = {
  async up(db, client) {
    const types = await db.collection('vehicleTypes').find({}).toArray();
    const manufacturers = await db.collection('vehicleManufacturers').find({}).toArray();

    const vehicles = types.reduce((res, t) => res.concat(manufacturers.map(m => ({
      vin: faker.vehicle.vin(),
      registrationNumber: `${faker.address.stateAbbr()}-${faker.address.zipCode().split('-')[0]}-${faker.address.countryCode()}`,
      vehicleManufacturer: m._id,
      vehicleType: t._id
    }))), []);

    await db.createCollection(collection).then(i => i.insertMany(vehicles));
  },

  async down(db, client) {
    try {
      await db.dropCollection(collection);
    } catch(e) {}
  }
};
