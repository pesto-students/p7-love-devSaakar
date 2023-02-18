const Person = function() {};

Person.prototype.initialize = function(name, age) {
    this.age = age;
    this.name = name;
}
function Teacher() {
    Person.call(this);
};

Teacher.prototype.teach = function(subject) {
    this.subject = subject;
    return `${this.name} is a teacher of ${this.subject}`;
};

Object.setPrototypeOf(Teacher.prototype, Person.prototype); 
// Teacher.prototype = Object.create(Person.prototype);
const professor = new Teacher();

professor.initialize("Vihay", 45);
console.log(professor.teach('Inheritance'));