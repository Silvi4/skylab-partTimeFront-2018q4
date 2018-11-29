//### is_object
function checkAndObject(input) {
    return input.typeOf();
};

checkAndObject(8);

//### Create object car
function Car(brand, model, color) {
    this.brand = brand,
    this.model = model,
    this.color = color,
    this.display = function(){
        console.log('My ' + this.color + ' '+ this.brand + ' ' + this.model + ' is great!!');
    }
};
var myCar = new Car('Seat', 'Leon', 'black');

myCar.display();

//### The blockchain
function Block(num, timestamp, prevHash, data) {
    this.num = num;
    this.timestamp = Date.now();
    this.prevHash = prevHash;  
    this.data = data;
};

/*function Chain(blocks, addBlocks, isValidChain) {
    this.block = [num = 0, timestamp = timestamp, prevHash = prevHash, data = ' '];
    this.addBlock = function () {
        for (var i = 0; i< block.lenght, i++){
            number[i-1] => number[i]=number[i-1]+1
        }
        function(s) {
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

}*/