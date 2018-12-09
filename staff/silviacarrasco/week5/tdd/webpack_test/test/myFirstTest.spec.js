import {rockPaperScissor} from '../src/index.js';
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

describe('test hand1 wins', function(){

  test('test scissors vs paper', function(done){
    var result = rockPaperScissor("scissors","paper");
    expect(result).toBe("scissors vs paper => scissors wins!");
    done();
  })

  test('test paper vs rock', function(done){
    var result = rockPaperScissor("paper","rock");
    expect(result).toBe("paper vs rock => paper wins!");
    done();
  })

  test('test rock vs scissors', function(done){
    var result = rockPaperScissor("rock","scissors");
    expect(result).toBe("rock vs scissors => rock wins!");
    done();
  })

});

describe('test hand2 wins', function(){

  test('test paper vs scissors', function(done){
    var result = rockPaperScissor("paper","scissors");
    expect(result).toBe("paper vs scissors => scissors wins!");
    done();
  })

  test('test rock vs paper', function(done){
    var result = rockPaperScissor("rock","paper");
    expect(result).toBe("rock vs paper => paper wins!");
    done();
  })

  test('test scissors vs rock', function(done){
    var result = rockPaperScissor("scissors","rock");
    expect(result).toBe("scissors vs rock => rock wins!");
    done();
  })

});

describe('test hand1 = hand2', function(){

  test('test paper vs paper', function(done){
    var result = rockPaperScissor("paper","paper");
    expect(result).toBe("paper vs paper => tie!");
    done();
  })

  test('test rock vs rock', function(done){
    var result = rockPaperScissor("rock","rock");
    expect(result).toBe("rock vs rock => tie!");
    done();
  })

  test('test scissors vs scissors', function(done){
    var result = rockPaperScissor("scissors","scissors");
    console.log(result)
    expect(result).toBe("scissors vs scissors => tie!");
    done();
  })

});