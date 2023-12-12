require('dotenv').config();
let m_uri = process.env.MONGO_URI;

let Person;
let m_connect = require('mongoose');
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
  let a = {name: 'babusona', age: 26, favoriteFoods: ['rosogolla', 'pantua']};
  let b = new Person(a);
  console.log('a = ' + a);
  console.log('b = ' + b);
  b.save(function(err, data){
    console.log('*** inside function save ***');
    // console.log('data = ' + data);
    if (err) 
      console.log('error = ' + err);
/*    else 
      console.log('data = ' + data); */
    console.log('*** leaving function save ***');
//    done(null, data);
  })
 done(null /*, data*/);
};
/*
let arrayOfPeople = [{name: 'ashim', age: 40, favoriteFoods: ['mutton', 'rice']},
                     {name: 'tukai', age: 41, favoriteFoods: ['paneer', 'bakarwadi']},
                     {name: 'anuska',age: 26, favoriteFoods:['potol','mushroom']}];*/
const createManyPeople = (arrayOfPeople, done) => {
  arrayOfPeople = [{name: 'ashim', age: 40, favoriteFoods: ['mutton', 'rice']},
                   {name: 'tukai', age: 41, favoriteFoods: ['paneer', 'bakarwadi']},
                   {name: 'anuska',age: 26, favoriteFoods:['potol','mushroom']}];
  Person.create(arrayOfPeople, function(err, data){
    if (err) console.log('error = ' + err);
    else console.log('data = ' + data);
  //  done(null, data);  
  });
   done(null /*, data*/);
};

const findPeopleByName = (personName, done) => {
  personName =  'ashim'; 
  Person.find({name: personName},function(err,personFound){
    if (err) return console.log('error = ' + err);
      else console.log('data was found = ' + personFound);
    done(null,personFound);
  })
// done(null /*, data*/);
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
