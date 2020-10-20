const faker = require('faker');

const getRandomArrayElement = arr => arr[faker.random.number(arr.length)] || arr[0];
const collectRandomArrayElements = (acc, length, arr) => acc.length < length ? collectRandomArrayElements([...acc, getRandomArrayElement(arr)], length, arr) : acc;
const getUniqueItems = arr => Array.from(new Set(arr).values());

module.exports = {
  getRandomArrayElement,
  getRandomArrayElements: arr => getUniqueItems(collectRandomArrayElements([], faker.random.number(arr.length) || 1, arr))
}
