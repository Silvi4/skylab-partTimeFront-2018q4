//Chain object
//var myChain = new Chain();
function Chain(){

    this.blocks = [];

    //Defines a Block object
    function Block(id, date, prevHash, data){
        this.number = id,
        this.timestamp = date,
        this.prevHash = prevHash,
        this.data = data
    }

    //Add a block into the blocks collection:
    this.addBlock = function(data){

        //Defines a function to get an hash:
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

        //Get a new id and the hash of the last block:
        var blockId = 1;
        var prevBlockHash = "";
        if(this.blocks.length > 0){
            var prevBlock = this.blocks[this.blocks.length - 1];
            blockId = prevBlock.number + 1;
            prevBlockHash = prevBlock.prevHash;
        }

        //Gets the current date:
        var curDate = new Date();

        //Creates a new hash:
        var hashStr = blockId.toString() + curDate.toISOString() + prevBlockHash;
        var hash = hash(hashStr);

        //Create a new block and add it to the blocks collection:
        var newBlock = new Block(blockId, curDate, hash, data);
        this.blocks.push(newBlock);
    }

    //Checks if the chain is valid:
    this.isValidChain = function(){

        for(var i = 0; i < this.blocks.length; i++){
            console.log(this.blocks[i].number.toString() + ": " + this.blocks[i].prevHash);
        }
    }

}