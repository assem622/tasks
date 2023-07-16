
const fs = require('fs');

const persons = [
  { id: 1, fname: 'ahmed', lname: 'mohamed', age: 25, city: 'cairo' },
  { id: 2, fname: 'mohamed', lname: 'ahmed', age: 30, city: 'giza' },
  { id: 3, fname: 'omar', lname: 'ahmed', age: 35, city: 'cairo' },
  { id: 4, fname: 'isalm', lname: 'mohamed', age: 40, city: 'mansora' },
  { id: 5, fname: 'omar', lname: 'tarek', age: 45, city: 'giza' },
  { id: 6, fname: 'assem', lname: 'ahmed', age: 50, city: 'cairo' },
  { id: 7, fname: 'mostafa', lname: 'hosney', age: 55, city: 'alx' }
];

fs.writeFileSync('persons.json', JSON.stringify(persons));

const updatedPersons = persons.filter(person => person.id !== 4 && person.id !== 6);

const personsJson = fs.readFileSync('persons.json').toString();
const personsList = JSON.parse(personsJson);

personsList.forEach(person => {
  console.log(person.fname, person.lname, person.city);
});

const person5 = personsList.find(person => person.id === 5);

console.log(person5);
