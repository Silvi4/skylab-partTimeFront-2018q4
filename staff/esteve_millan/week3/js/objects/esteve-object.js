// is an object 

function isAnObject( input ){

    if(Array.isArray(input) === true){

        console.log('is an array')

    } else if( typeof(input) === 'object'  ){

        console.log('true')

    } else {
        console.log('false')
    }
 
}

isAnObject('Skylab')

isAnObject([3, 5])

isAnObject({a: 1});




//Create object car


function Car( brand , model, color ){

    this.marca = brand;
    this.modelo = model;
    this.color = color;

    console.log('My '  + this.color + ' ' + this.marca + ' '  + this.modelo + ' is great!'  )
}

var seatLeon = new Car( 'Seat' , 'León' , 'black')

console.table(seatLeon);


// blockchain

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



function BlockObject(){

    this.number =  0;
    this.timestamp =  parseInt(Date.now());
    this.prevHash =  hash(BlockObject.timestamp);
    this.data = arguments;

    return console.log(this.number + this.timestamp + prevHash)

} 

var firstBlock = new BlockObject('first block')

function Chain(){

    var blocks = [ firstBlock ];

    function addBlock(){

        var lastBlock = blocks[-1];
        
        function NewBlockObject(){

            this.number =  lastBlock.number++;
            this.timestamp =  parseInt(Date.now());
            this.Hash =  hash(lastBlock);
            this.data = arguments;
        
            blocks.push(this)
            return console.log(this.number + this.timestamp + Hash)

        
        } 

        console.table(blocks)
    };
}





