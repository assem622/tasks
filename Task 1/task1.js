
const fs  = require ("fs")

const person = {
    fname : "ahmed" ,
    lname : "hossam" ,
    age : 20 ,
    city : "alex"
}

const personJson = JSON.stringify(person)

fs.writeFileSync( "data.json" , personJson )

const personJsonFromFile = fs.readFileSync("data.json").toString()

const personFromFile = JSON.parse(personJsonFromFile)

personFromFile.fname = 'adel';
personFromFile.lname = 'ahmed';
personFromFile.age = 40;
personFromFile.city = 'cairo';

const updatedPersonJson = JSON.stringify(personFromFile);

fs.writeFileSync('data.json', updatedPersonJson);

