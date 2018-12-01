const SHA256 = require("crypto-js/sha256");
class Block{

  constructor(data, prevhash =''){
    this.index = '';
    this.timestamp = this.timenow();
    this.prevhash = prevhash;
    this.data = data;
    this.hash = this.calchash()
  }

  timenow(){
    let rightNow = new Date();
    return rightNow.toISOString().slice(0,23).replace(/-/g,"");
  }

  calchash() {
    return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
  };

}

class BlockChain{

  constructor(){
    this.chain = [this.createGenesisBlock]
  }

  createGenesisBlock(){
    return new Block(0, '1543351846197', '0', 'Genesis Block')
  }

  getLatestBlock(){
    return this.chain[this.chain.length -1]
  }

  addBlock(newBlock){
    newBlock.prevhash = this.getLatestBlock().hash;
    newBlock.hash = newBlock.calchash()
    newBlock.index = this.chain.length
    this.chain.push(newBlock)
  }

  isChainValid() {
    for (let i = 1; i < this.chain.length; i++){
        const currentBlock = this.chain[i];
        const previousBlock = this.chain[i - 1];

        if (currentBlock.hash !== currentBlock.calculateHash()) {
            return false;
        }

        if (currentBlock.previousHash !== previousBlock.hash) {
            return false;
        }
    }
    return true;
}
}

let dummyCoin = new BlockChain()

console.log(dummyCoin.chain.length,dummyCoin.chain)

timenow = function(){
  let rightNow = new Date();
  return rightNow.toISOString().slice(0,23).replace(/-/g,"");
}

dummyCoin.addBlock(new Block({amount: 100}))
dummyCoin.addBlock(new Block({amount: 200}))
dummyCoin.addBlock(new Block({amount: 300}))
dummyCoin.addBlock(new Block({amount: 400}))
dummyCoin.addBlock(new Block({amount: 500}))

console.log(JSON.stringify(dummyCoin, null, 2))

