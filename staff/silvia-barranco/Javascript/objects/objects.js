//is_object
function isObject(input){
    return typeof input == Object ? true : false;
}
isObject("kjskSJ")

//Create object car
function Car (brand, model, color){
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.feedback = function(){
        console.log('My '+ this.color + ' ' + this.brand +' '+ this.model + ' is great!')
    }
}

var seatLeon = new Car ('Seat', 'León', 'black');
seatLeon.feedback();

//The blockchain
var hash = function(s) {
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

function Chain(){
    class Block {
        constructor(index, timestamp, data, previousHash = '') {
            this.index = index;
            this.previousHash = previousHash;
            this.timestamp = timestamp;
            this.data = data;
            this.hash = this.calculateHash(); 
        }
        calculateHash(){
            return hash;
        }
    }
    

    function isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
        const currentBlock = this.chain[i];
        const previousBlock = this.chain[i - 1];

        if (currentBlock.hash !== currentBlock.calculateHash()) {
            return false;
        }if (currentBlock.previousHash !== previousBlock.hash) {
            return false;
        }
    }
    return true;
}

}