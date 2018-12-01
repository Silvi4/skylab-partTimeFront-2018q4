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
    this.blocks = [{
        number: 0,
        timestamp: +(new Date()),
        prevHash: '',
        data:''
    }];

    this.addBlock = function(data){
        var lastBlock = this.blocks.slice(-1)[0];
        var stringToHash = String(lastBlock.number) + String(lastBlock.timestamp) + lastBlock.prevHash + lastBlock.data;

        var b = {
          number: lastBlock.number + 1,
          timestamp: +(new Date()),
          prevHash: hash(stringToHash),
          data: data
        };

        this.blocks.push(b);
    };
    this.isValidChain = function(){
      var isValid = true;

      for(i=this.blocks.length - 1 ; i>0 ; i--){
        var lastBlock = this.blocks[i];
        var lastLastBlock = this.blocks[i-1];

        var stringToHash = String(lastLastBlock.number) + String(lastLastBlock.timestamp) + lastLastBlock.prevHash + lastLastBlock.data;
        var lastLastHash = hash(stringToHash);

        if(lastBlock.prevHash !== lastLastHash){
           isValid = false;
           break;
        }
      }

      if(isValid){
        return "THE CHAIN IS VALID";
      } else {
        return "DANGER!!! THE CHAIN IS NOT VALID AT "+i;
      }
    }
}

var c = new Chain();
c.addBlock('data1');
c.addBlock('data2');
console.log(c);
//c.blocks[0].data = "jajajaja la he liado";
console.log(c);
console.log(c.isValidChain());
