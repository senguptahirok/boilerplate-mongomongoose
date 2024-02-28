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
  arrayOfPeople = [{name: 'ganesh', age: 38, favoriteFoods: ['dosa', 'idly']},
                   {name: 'joel', age: 27, favoriteFoods: ['thatte idly', 'mutton sambar']},
                   {name: 'vijay', age: 41, favoriteFoods:['samosa','dosa']}];
  Person.create(arrayOfPeople, function(err, data){
    if (err) console.log('error = ' + err);
    else console.log('data = ' + data);
    //done(null, data);  
  });
   done(null /*, data*/);
};

let personName = 'joel';
const findPeopleByName = (personName, done) => {
  //personName =  {name:'ashim'}; 
  Person.find({name: personName},function(err,personFound){
    if (err) {
      console.log('error = ' + err);}
    else {
      console.log('data was found = ' + personFound);}
    done(null,personFound);
  })
// done(null /*, data*/);
};

let food = ['potol','mushroom'];
const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods: food},function(err,data){
    if (err)
      console.log('error = ' + err);
    else 
      console.log('data was found, name = '+ data.name);
    done(null, data);
  })
  //done(null /*, data*/);
};

let personId = '65d46d0896975b0071c0af59';
const findPersonById = (personId, done) => {
  Person.findById({_id: personId},function(err,data){
   if (err)
     console.log('error = ' + err);
   else
     console.log('data was found by id = ' + data.name); 
   done (null,data);
  })
  //done(null /*, data*/);
};

//personId = '65b63db24ee58c005dad1b40';
const findEditThenSave = (personId, done) => {
//  personId = '65b63db24ee58c005dad1b40';
  const foodToAdd = "hamburger";
  Person.findById(personId,function(err,data){
    if (err) console.log('error in findEditThenSave ' + err);
    else {
      data.favoriteFoods.push(foodToAdd);
      data.save(function(err,updatedData){
        if (err) console.log('err in update '+ err);
        else console.log('data was updated, updatedData = '+ updatedData);
        done(null,updatedData);
      });
//      console.log('data was updated, data = ' + data);
    }
    done(null,data);
  })
//done(null /*, data*/);
};

//let personName = 'joel';
const findAndUpdate = (personName, done) => {
//  personName = 'joel';
  const ageToSet = 20;
  console.log('personName = ' + personName);
  console.log('before findOneAndUpdate');
  Person.findOneAndUpdate({name: personName},{$set:{age: ageToSet}},{new: true},function(err,data){
    if (err) console.log('error in findOneAndUpdate' + err);
    else console.log('updated data is ' + data);
    done(null,data);
  });
  console.log('after findOneAndUpdate');
//  done(null /*, data*/);
};

//personId = '65d369786df8b30063127978';
const removeById = (personId, done) => {
  console.log ('personId is : ' + personId);
  Person.findByIdAndRemove(personId,function(err,data){
    if (err) console.log('error in finding the person detail by id' + err);
    else {
      data.save(function(err01,updatedData){
        if (err01) console.log('error in updating the document by id' + err01);
        else console.log('id :' + personId + 'was removed successfully!, updated data is ' + updatedData);
        done(null,updatedData);
      })
    } 
//    else console.log('removed document is ' + data);
    done(null,data);
  })
//  done(null /*, data*/);
};

//let nameToRemove = 'joel';
const removeManyPeople = (done) => {
  const nameToRemove = "Mary";
//  Person.remove({name: nameToRemove},function(err, data){
  Person.remove({name: nameToRemove},function(err, data){
    console.log('inside function remove');
    if (err) console.log('error in finding the document by name :'+ err);
    else {
      data.ok = true;
      data.n = data.deletedCount;
      console.log ('data was removed successfully, data = ' + data);
    }
    done(null, data);
    console.log('after done in remove');
  })
  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";
  Person.find({favoriteFoods: foodToSearch})
  .sort({name: 1})
  .limit(2)
  .select()
  .exec(function(err,data){
    if (err) console.log('error msg, not found - '+err);
    else console.log('person was found with food '+foodToSearch+', person is :'+data);
    done(err,data);
  });
//  done(null /*, data*/);
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
