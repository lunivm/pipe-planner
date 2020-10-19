const collection = 'taskPriorities';

module.exports = {
  async up(db, client) {
    await db.createCollection(collection).then(i => i.insertMany([
      { _id: 'ASAP', name: 'ASAP' },
      { _id: 'HIGH', name: 'High' },
      { _id: 'MEDIUM', name: 'Medium' },
      { _id: 'LOW', name: 'Low' }
    ]));
  },

  async down(db, client) {
    try {
      await db.dropCollection(collection);
    } catch (e) {
    }
  }
};
