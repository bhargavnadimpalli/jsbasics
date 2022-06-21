//constructor function
function Person(firstName, LastName, dob){
    this.firstName = firstName;
    this.LastName = LastName;
    this.dob = dob;
}

//Instantiate Object
const person1 = new Person('nadimpalli', 'bhargav', '22-11-1998');

console.log(person1.dob);