// Check if a var is an object

var person = {
  name: 'John',
  lastname: 'Doe',
  age: 35
}

function idObj(obj){
  return obj instanceof Object; 
}

console.log(idObj(person))

// Car object w/ message

var cars = {
  model: 'Seat',
  year: 1975,
  color: 'black',
  myCar: function (){
    return (`My ${this.model} from ${this.year} is ${this.color}`)
  }
}

console.log(cars.myCar())



// Blockchain //




// --------- Hash --------- //



function Block(num,prevHash = '',data) {
  this.number = num;
  this.timestamp =  +new Date();
  this.prevHash = prevHash;
  this.data = data;
  this.hash = calchash(this.number + this.timestamp + this.prevHash + JSON.stringify(this.data))
}

var calchash = function(s) {
  var a = 1, c = 0, h, o;
  if (s) {
      a = 0;
      for (h = s.length - 1; h >= 0; h--) {
          o = s.charCodeAt(h);
          a = (a<<6&268435455) + o + (o<<14);
          c = a & 266338304;
          a = c!==0?a^c>>21:a;
      }
  }
  return String(a);
};

var genesisBlock = new Block(0,'0','Genesis Block')
console.log(genesisBlock)


// Please check Week-3/Extras/class.js


