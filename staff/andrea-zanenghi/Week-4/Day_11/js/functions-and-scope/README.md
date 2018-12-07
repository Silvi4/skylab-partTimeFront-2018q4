
/*var name = "asd";

var person = {
  name: 'Carles',
  sayHi: function() {
    console.log(this.name);
  }
}

var otherPerson = {
  name: "Silvia"
}

otherPerson.mySayHi = person.sayHi;

console.log(otherPerson.mySayHi)*/
/*
function a(){
  console.log("a", this);
  return b;
}

function b() {
  console.log("b", this);
  //c();
}

function c() {
  console.log(this);
}

var obj = {
  name: "Silvia"
}
obj.m = a;


var obj2 = {
  name: "Andrea"
}
obj2.m = obj.m();
obj2.m()


*/

function a(arg1, arg2){
  console.log("a", this);
  console.log(arg1, arg2);
}

var obj = {
  name: "Silvia"
}


var functWithCall = a.bind(obj, "1", "2");
console.log(functWithCall());