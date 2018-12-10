function Person(firstName, lastName, age, gender, interest = []) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
  this.interest = interest;
  this.genArt = function () {
    return this.gender === "m" ? "he" : "she";
  };
  this.showInterest = function () {
    int = this.interest;
    if (int.length === 0) {
      return "nothing";
    } else if (int.length > 2) {
      slice = int.slice(-1);
      return int.slice(0, int.length - 1).join(", ") + " and " + slice;
    } else {
      return int.join(" and ");
    }
  };

  this.greeting = function () {
    console.log(`Hi! I'm ${this.firstName}`);
  };
  this.farewell = function () {
    console.log(`${this.firstName} has left the builing. Bye for now!`);
  };
  this.bio = function () {
    console.log(
      `${this.firstName} ${this.lastName} is ${
      this.age
      } years old, ${this.genArt()} likes ${this.showInterest()}`
    );
  };
}

var johnDoe = new Person("John", "Doe", 33, "m", ["internet", "food"]);

johnDoe.greeting();
johnDoe.farewell();
johnDoe.bio();

function Student(firstName, lastName, age, gender, interest = []) {
  Person.call(this, firstName, lastName, age, gender, interest);
  this.greeting = function () {
    console.log(`Yo! I'm ${firstName}`);
  };
}

var fidoDido = new Student("Fido", "Dido", 22, "m", [
  "videogames",
  "junk food",
  "girls"
]);

fidoDido.greeting();
fidoDido.bio();
console.log(fidoDido.interest);

function Teacher(firstName, lastName, age, gender, interest = [], subject) {
  Person.call(this, firstName, lastName, age, gender, interest);
  this.subject = subject;
  this.formalArt = function () {
    return this.gender === "m" ? "mr." : "ms.";
  };
  this.greeting = function () {
    console.log(
      `Hello, ny name is ${this.formalArt()} ${this.lastName} and I teach ${
      this.subject
      }`
    );
  };
}

var madProf = new Teacher(
  "Joe",
  "Mad",
  55,
  "m",
  ["reading", "young girls", "philosophy"],
  "philosophy"
);

madProf.greeting();
madProf.bio();
