function Persona(name, surname, age, gender, interests){
    this.firstName = name;
    this.lastName = surname;
    this.age = age;
    this.gender = gender;
    this.interest = interests;
};

Persona.prototype.greeting= function greeting(){
    return "Hello I'm " + this.firstName;
}

Persona.prototype.farewell= function farewell(){
    return this.firstName + "has left the building. By for now!";
}

Persona.prototype.bio= function bio(){
    var gen = this.gender == 'female'? 'She' : 'He';
    var lastInt = this.interest.slice(-1);
    return this.firstName + ' ' + this.lastName + " is " + this.age + " years old. " + gen + " likes " + this.interest.slice(0, this.interest.length -1).join(', ') + ' and ' + lastInt + ".";
}


var person = new Persona("Rosa","López", 37, "female", ["read", "travel"]);

function Student(name, surname, age, gender, interests, studies){
    person.call(this, name, surname, age, gender, interests, studies);
    this.studies = studies;
}

Student.prototype = Object.create(Persona.prototype);
Student.prototype.constructor = Student;
Student.prototype.greeting = function(){
    return "Yo! I'm " + this.firstName;
};

var estudiante = new Student("Maria", "González", 21, "female", ["study", "cooking"], "Laws");


function Teacher(name, surname, age, gender, interests, studies){
    Persona.call(this, name, surname, age, gender, interests, studies);
    this.studies = studies;
}

Teacher.prototype = Object.create(Persona.prototype);
Teacher.prototype.constructor = Teacher;
Teacher.prototype.greeting= function (){
    var formalGen = this.gender == 'female'? 'Mrs' : 'Ms';
    var sliceInterest = 
    return "Hello, my name is " + formalGen + this.lastName + " and I teach" + this.studies + ''
}

var profesor = new Teacher("Joaquim", "Gutierrez", 45, "male", ["photography"], "Law");
