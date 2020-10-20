module.exports = {
  createCollectionSimpleMigration(collection) {
    return {
      async up(db, client) {
        await db.createCollection(collection);
      },

      async down(db, client) {
        try {
          await db.dropCollection(collection);
        } catch(e) {}
      }
    }
  }
}
