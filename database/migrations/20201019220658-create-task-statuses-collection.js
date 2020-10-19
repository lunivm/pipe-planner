const collection = 'taskStatuses';

module.exports = {
  async up(db, client) {
    await db.createCollection(collection).then(i => i.insertMany([
      { _id: 'NOT_STARTED', name: 'Not Started' },
      { _id: 'IN_PROGRESS', name: 'In Progress' },
      { _id: 'DONE', name: 'Done' },
      { _id: 'HOLD', name: 'Hold' }
    ]));
  },

  async down(db, client) {
    try {
      await db.dropCollection(collection);
    } catch (e) {
    }
  }
};
