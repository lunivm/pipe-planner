const collection = 'taskStatuses';

module.exports = {
  async up(db, client) {
    await db.createCollection(collection).then(i => i.insertMany([
      { name: 'Not Started', sortValue: 0 },
      { name: 'In Progress', sortValue: 1 },
      { name: 'Done', sortValue: 2 },
      { name: 'Hold', sortValue: 3 }
    ]));
  },

  async down(db, client) {
    try {
      await db.dropCollection(collection);
    } catch (e) {
    }
  }
};
