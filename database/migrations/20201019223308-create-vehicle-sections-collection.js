const collection = 'vehicleSections';

module.exports = {
  async up(db, client) {
    await db.createCollection(collection).then(i => i.insertMany([
      { _id: 'ENGINE', name: 'Engine' },
      { _id: 'CHASSIS', name: 'Chassis' },
      { _id: 'BODY', name: 'Body' },
      { _id: 'TRANSMISSION', name: 'Transmission' },
      { _id: 'ELECTRICITY', name: 'Electricity' },
      { _id: 'CABIN', name: 'Cabin' }
    ]));
  },

  async down(db, client) {
    try {
      await db.dropCollection(collection);
    } catch (e) {
    }
  }
};
