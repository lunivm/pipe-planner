const faker = require('faker');

const collection = 'vehicleManufacturers';

module.exports = {
  async up(db, client) {
    await db.createCollection(collection).then(i => {
      const manufacturers = new Set(new Array(20).fill('').map(() => faker.vehicle.manufacturer()));
      const manufacturersCollection = Array.from(manufacturers.values()).map(name => ({name})).slice(0, 10);

      return i.insertMany(manufacturersCollection);
    })
  },

  async down(db, client) {
    try {
      await db.dropCollection(collection);
    } catch (e) {}
  }
};
