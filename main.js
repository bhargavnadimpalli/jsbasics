//class constructors
class Person {
    constructor(firstName, LastName, dob){
        this.firstName = firstName;
        this.LastName = LastName;
        this.dob = new Date(dob);
    }

    birthYear() {
        return this.dob.getFullYear();
    }
    
    fullName() {
        return `${this.firstName} ${this.LastName}`;
    }

}

//Instantiate Object
const person1 = new Person('nadimpalli', 'bhargav', '11-22-1998');

console.log(person1.fullName());
console.log(person1);
