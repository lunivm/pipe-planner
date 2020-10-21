const collection = 'taskPriorities';

module.exports = {
  async up(db, client) {
    await db.createCollection(collection).then(i => i.insertMany([
      { name: 'ASAP', sortValue: 0 },
      { name: 'High', sortValue: 1 },
      { name: 'Medium', sortValue: 2 },
      { name: 'Low', sortValue: 3 }
    ]));
  },

  async down(db, client) {
    try {
      await db.dropCollection(collection);
    } catch (e) {
    }
  }
};
