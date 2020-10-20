const collection = 'vehicleSections';

module.exports = {
  async up(db, client) {
    await db.createCollection(collection).then(i => i.insertMany([
      { name: 'Engine' },
      { name: 'Chassis' },
      { name: 'Body' },
      { name: 'Transmission' },
      { name: 'Electricity' },
      { name: 'Cabin' }
    ]));
  },

  async down(db, client) {
    try {
      await db.dropCollection(collection);
    } catch (e) {
    }
  }
};
