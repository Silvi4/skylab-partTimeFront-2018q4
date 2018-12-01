
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

function chain(blocks,addBlock,isValidChain){
    blocks: [],
    addBlock: function(data){
        var blockslength = this.blocks.length;
        var lastblock = this.blocks[blockslength -1]
        var lastoflastblock = this.blocks[lastblock +1]
        var timestamp = new Date(2018,10,28)
    }
    isValidChain:
}