
// is_object

function isObject(input) {
    if(typeof(input) === 'object') {
        return true;
    }else {
        return false;
    }
}

isObject({name:'silvia',age:31});

// create object car

function CarConstructor(brand,model,color){
    this.brand = brand;
    this.model = model;
    this.color = color;
}

var theCar = new CarConstructor ('Seat', 'León', 'black')
console.log('My '+ theCar.color +' '+ theCar.brand+' '+theCar.model+' is great!')

// the blockchain

function Block(number,timestamp,prevHash,data){
        this.number = number,
        this.timestamp = +new Date(),
        this.prevHash = prevHash,
        this.data = data
}

