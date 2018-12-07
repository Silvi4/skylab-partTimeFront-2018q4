function Person ( first , last , age , fOm , interests ) {

    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.gender = function (){  var pronoun = fOm === 'm'? 'he' : 'she'; return pronoun; };
    this.interests = interests;
    this.greeting = function(){  return 'Hi! I\'m ' + this.firstName };
    this.farewell = function(){ return this.firstName + ' has left the building. Bye bye for now'}
    this.bio = function(){ return this.firstName + ' ' + this.lastName + ' is ' + this.age + ' years old. ' + this.gender + ' likes ' + this.interests() }

};

var edu = new Person( 'edu' , 'millan' , 58 , 'm' , [ 'interst1' , 'interest2'] );
console.log(edu);
console.log(edu.greeting());

function Student(first , last , age , fOm , interests, degree){

    Person.call(first , last , age , fOm , interests);
    this.degree = degree

};

Student.prototype = Object.create(Person.prototype) // Enlazamos el constructor con el de Person
Student.prototype.constructor = Student // Usamos el constructor de student con sus parametros para poder extender

var marcos = new Student( 'marcos', 'perez' , 48 , 'm' , [ 'interst1' , 'interest2'], 'computer science' );


console.log(marcos);