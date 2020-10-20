const collection = 'workTypes';

module.exports = {
  async up(db, client) {
    await db.createCollection(collection).then(i => i.insertMany([
      { name: 'Repair' },
      { name: 'Replace' },
      { name: 'Maintenance' },
      { name: 'Enhancement' }
    ]));
  },

  async down(db, client) {
    try {
      await db.dropCollection(collection);
    } catch (e) {
    }
  }
};
