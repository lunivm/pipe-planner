const collection = 'vehicleTypes';

module.exports = {
  async up(db, client) {
    await db.createCollection(collection).then(i => i.insertMany([
      { name: 'Panel Van' },
      { name: 'Sprinter Van' },
      { name: 'Straight Truck' },
      { name: 'Refrigerated Truck' },
      { name: 'Stakebed Truck' },
      { name: 'Spotter/Yard Tractor' },
      { name: 'Day Cab Tractor' },
      { name: 'Sleeper Tractor' },
      { name: 'Dry Van' },
      { name: 'Refrigerated Trailer' }
    ]));
  },

  async down(db, client) {
    try {
      await db.dropCollection(collection);
    } catch (e) {
    }
  }
};
