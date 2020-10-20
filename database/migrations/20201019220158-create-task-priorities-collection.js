const collection = 'taskPriorities';

module.exports = {
  async up(db, client) {
    await db.createCollection(collection).then(i => i.insertMany([
      { name: 'ASAP' },
      { name: 'High' },
      { name: 'Medium' },
      { name: 'Low' }
    ]));
  },

  async down(db, client) {
    try {
      await db.dropCollection(collection);
    } catch (e) {
    }
  }
};
