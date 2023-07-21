let m_connect = require('mongoose');
require('dotenv').config();
console.log('MONGO_URI = '+ process.env.MONGO_URI);
let Person;
let m_uri = process.env.MONGO_URI;
m_connect.connect(m_uri,{useNewUrlParser: true, useUnifiedTopology: true});

let personSchema = new m_connect.Schema({
  name:{
    type: String,
    required: true
  },
  age: Number,
  favoriteFoods: [String]
});

Person = m_connect.model('Person',personSchema);

const createAndSavePerson = (done) => {
  let a = {name: 'hirok', age: 40, favoriteFoods: ['rice', 'bread']};
  let b = new Person(a);
  b.save(function(err,data){
    if (err) 
      console.log('obj save failed')
    return;
  })

  done(null /*, data*/);
};

const createManyPeople = (arrayOfPeople, done) => {
  done(null /*, data*/);
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
