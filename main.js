//constructor function
function Person(firstName, LastName, dob){
    this.firstName = firstName;
    this.LastName = LastName;
    this.dob = new Date(dob);
    this.birthYear = () => this.dob.getFullYear();
    this.fullName = () => `${firstName} ${LastName}`;
}

//Instantiate Object
const person1 = new Person('nadimpalli', 'bhargav', '11-22-1998');

console.log(person1.birthYear());
console.log(person1.fullName());