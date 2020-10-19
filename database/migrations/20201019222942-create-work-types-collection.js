const collection = 'workTypes';

module.exports = {
  async up(db, client) {
    await db.createCollection(collection).then(i => i.insertMany([
      { _id: 'REPAIR', name: 'Repair' },
      { _id: 'REPLACE', name: 'Replace' },
      { _id: 'MAINTENANCE', name: 'Maintenance' },
      { _id: 'ENHANCEMENT', name: 'Enhancement' }
    ]));
  },

  async down(db, client) {
    try {
      await db.dropCollection(collection);
    } catch (e) {
    }
  }
};
