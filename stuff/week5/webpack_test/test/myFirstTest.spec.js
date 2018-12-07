import {rockPaperScissor} from '../src/index.js';

describe('Test hand1 wins', function() {

  test('scissors wins over paper', function(done) {
    var result = rockPaperScissors("scissors", "paper");
    expect(result).toBe("scissors vs paper => scissors wins!")+
    done();
  })

  test('rock wins over scissors', function(done) {
    var result = rockPaperScissors("rock", "scissors");
    expect(result).toBe("rock vs scissors => rock wins!");
    done();
  })

  test('paper wins over rock', function(done) {
    var result = rockPaperScissors("paper", "rock");
    expect(result).toBe("paper vs rock => paper wins!");
    done();
  })
  
})

describe('Test hand2 wins', function() {

  test('scissors wins over paper', function(done) {
    var result = rockPaperScissors("paper", "scissors");
    expect(result).toBe("paper vs scissors => scissors wins!")+
    done();
  })

  test('rock wins over scissors', function(done) {
    var result = rockPaperScissors("scissors", "rock");
    expect(result).toBe("scissors vs rock => rock wins!");
    done();
  })

  test('paper wins over rock', function(done) {
    var result = rockPaperScissors("rock", "paper");
    expect(result).toBe("rock vs paper => paper wins!");
    done();
  })
  
})

describe('Test tie', function() {

  test('scissors tie', function(done) {
    var result = rockPaperScissors("scissors", "scissors");
    expect(result).toBe("scissors vs scissors => tie!")+
    done();
  })

  test('rock tie', function(done) {
    var result = rockPaperScissors("rock", "rock");
    expect(result).toBe("rock vs rock => tie!");
    done();
  })

  test('paper tie', function(done) {
    var result = rockPaperScissors("paper", "paper");
    expect(result).toBe("paper vs paper => tie!");
    done();
  })
  
})



/*
describe('Test my sum function',function(){
  var a, b;

  beforeEach(() => {
    a = parseInt(Math.random()*10);
    b = parseInt(Math.random()*10);
  });

  for(var i=0 ;i < 100 ; i++){
    test('It works with ints', function(done){
      
      var result = sum(a,b); 
      
      expect(result).toBe(a+b);
      done()
    });
  }

  test('It works with strings', function(done){
    var result = sum('3','4'); 
    expect(result).toBe(7);
    done()
  });

  test('Rejects not numbers', function(done){
    var result = sum('a','4'); 
    expect(result).toBe('no sumes peras con manzanas.');
    done()
  });
})
*/