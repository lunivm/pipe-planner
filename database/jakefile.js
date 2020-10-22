const faker = require('faker');
const { task, namespace } = require('jake');
const { mongodbUrl, dbName } = require('./config');
const MongoClient = require('mongodb').MongoClient;
const helpers = require('./jakefile-helpers');

const client = new MongoClient(mongodbUrl);
const getDb = async () => {
  try {
    return client.db(dbName);
  } catch (e) {
    await client.connect();
    return getDb();
  }
}

namespace('generate', () => {
  task('vehicleManufacturers', async () => {
    const db = await getDb();

    const manufacturers = new Set(new Array(20).fill(null).map(() => faker.vehicle.manufacturer()));
    const manufacturerItems = Array.from(manufacturers.values()).map(name => ({name})).slice(0, 10);

    const manufacturersCollection = await db.collection('vehicleManufacturers');
    await manufacturersCollection.insertMany(manufacturerItems);
  });

  task('vehicles', async () => {
    const db = await getDb();

    const types = await db.collection('vehicleTypes').find({}).toArray();
    const manufacturers = await db.collection('vehicleManufacturers').find({}).toArray();

    const vehicles = types.reduce((res, t) => res.concat(manufacturers.map(m => ({
      vin: faker.vehicle.vin(),
      registrationNumber: `${faker.address.stateAbbr()}-${faker.address.zipCode().split('-')[0]}-${faker.address.countryCode()}`,
      vehicleManufacturer: m._id,
      vehicleType: t._id
    }))), []);

    const vehiclesCollection = await db.collection('vehicles');
    await vehiclesCollection.insertMany(vehicles);
  });

  task('currentTasks', async () => {
    const db = await getDb();

    const priorities = await db.collection('taskPriorities').find({}).toArray();
    const statuses = await db.collection('taskStatuses').find({}).toArray();
    const vehicles = await db.collection('vehicles').find({}).toArray();
    const vehicleSections = await db.collection('vehicleSections').find({}).toArray();
    const workTypes = await db.collection('workTypes').find({}).toArray();

    const tasks = new Array(500).fill(null).map(i => {
      const task = {
        title: faker.lorem.words(),
        priority: helpers.getRandomArrayElement(priorities)._id,
        status: helpers.getRandomArrayElement(statuses)._id,
        vehicle: helpers.getRandomArrayElement(vehicles)._id,
        injuredVehicleSections: helpers.getRandomArrayElements(vehicleSections).map(i => i._id),
        workTypes: helpers.getRandomArrayElements(workTypes).map(i => i._id)
      };

      return faker.random.boolean() ? task : Object.assign(task, {
        description: faker.lorem.sentence()
      });
    });

    const tasksCollection = await db.collection('currentTasks');
    await tasksCollection.insertMany(tasks);
  });

  task('db', ['generate:vehicleManufacturers', 'generate:vehicles', 'generate:currentTasks'], async () => client.close());
});

task('dropDb', async () => {
  const db = await getDb();
  await db.dropDatabase();
  await client.close();
});
