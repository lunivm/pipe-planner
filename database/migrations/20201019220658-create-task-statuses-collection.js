const collection = 'taskStatuses';

module.exports = {
  async up(db, client) {
    await db.createCollection(collection).then(i => i.insertMany([
      { name: 'Not Started' },
      { name: 'In Progress' },
      { name: 'Done' },
      { name: 'Hold' }
    ]));
  },

  async down(db, client) {
    try {
      await db.dropCollection(collection);
    } catch (e) {
    }
  }
};
