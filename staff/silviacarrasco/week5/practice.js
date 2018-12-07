// function person
function Person(firstName,lastName,age,gender,interests){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
}

Person.prototype.greeting = function(){
    return "Hi! I'm " + this.firstName;
}

Person.prototype.farewell = function(){
    return this.firstName + "has left the building. Bye for now!"
}

Person.prototype.bio = function(){
    var gend = this.gender == 'female'? 'She ' : 'He '
    var message = this.firstName + ' ' + this.lastName + ' is ' + this.age + ' years old. '+ gend
    switch(this.interests.length){
        case 0: 
            return message+"don't say interests";
        case 1:
            return message+'likes ' + this.interests;
        default:
            return message
    }
     
}

var persona = new Person('Silvia','Carrasco',31,'female',['Develop','Dance','Cook']);

// function student call

function Student(firstName,lastName,age,gender,interests){
    Person.call(this,firstName,lastName,age,gender,interests)
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.greeting = function(){
    return "I'm " + this.firstName;
}
var estudiante = new Student('Raul','Garcia',33,'male',['Photography'])

// function teacher call

function Teacher(firstName,lastName,age,gender,subject,interests){
    Person.call(this,firstName,lastName,age,gender,interests)
    this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;
Teacher.prototype.greeting = function(){
    var ind = this.gender == 'female'? 'Ms. ' : 'Mr. ';
    return 'Hello, my name is ' + ind + this.lastName + ' and I teach ' + this.subject
}


var teach = new Teacher('Maria', 'Fernandez', 40,'female','Maths')