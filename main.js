//constructor function
function Person(firstName, LastName, dob){
    this.firstName = firstName;
    this.LastName = LastName;
    this.dob = new Date(dob);
}

Person.prototype.birthYear = function() {
    return this.dob.getFullYear();
}

Person.prototype.fullName = function() {
    return `${this.firstName} ${this.LastName}`;
}

//Instantiate Object
const person1 = new Person('nadimpalli', 'bhargav', '11-22-1998');

console.log(person1.fullName());
console.log(person1);
