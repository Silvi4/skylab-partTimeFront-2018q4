import {rockPaperScissors} from '../src/index.js';

describe('Test hand1 wins', function() {

  test('scissors wins over paper', function(done) {
    var result = rockPaperScissors("scissors", "paper");
    expect(tempResult.msg).toBe("scissors vs paper => scissors wins!");
    expect(tempResult.winner).toBe("hand1");
    done();
  })

  test('rock wins over scissors', function(done) {
    var tempResult = rockPaperScissors("rock", "scissors");
    expect(tempResult.msg).toBe("rock vs scissors => rock wins!");
    expect(tempResult.winner).toBe("hand1");
    done();
  })

  test('paper wins over rock', function(done) {
    var tempResult = rockPaperScissors("paper", "rock");
    expect(tempResult.msg).toBe("paper vs rock => paper wins!");
    expect(tempResult.winner).toBe("hand1");
    done();
  })
  
})

describe('Test hand2 wins', function() {

  test('scissors wins over paper', function(done) {
    var tempResult = rockPaperScissors("paper", "scissors");
    expect(tempResult.msg).toBe("paper vs scissors => scissors wins!")+
    expect(tempResult.winner).toBe("hand2");
    done();
  })

  test('rock wins over scissors', function(done) {
    var tempResult = rockPaperScissors("scissors", "rock");
    expect(tempResult.msg).toBe("scissors vs rock => rock wins!");
    expect(tempResult.winner).toBe("hand2");
    done();
  })

  test('paper wins over rock', function(done) {
    var tempResult = rockPaperScissors("rock", "paper");
    expect(tempResult.msg).toBe("rock vs paper => paper wins!");
    expect(tempResult.winner).toBe("hand2");
    done();
  })
  
})

describe('Test tie', function() {

  test('scissors tie', function(done) {
    var tempResult = rockPaperScissors("scissors", "scissors");
    expect(tempResult.msg).toBe("scissors vs scissors => tie!")+
    expect(tempResult.winner).toBe("tie");
    done();
  })

  test('rock tie', function(done) {
    var tempResult = rockPaperScissors("rock", "rock");
    expect(tempResult.msg).toBe("rock vs rock => tie!");
    expect(tempResult.winner).toBe("tie");
    done();
  })

  test('paper tie', function(done) {
    var tempResult = rockPaperScissors("paper", "paper");
    expect(tempResult.msg).toBe("paper vs paper => tie!");
    expect(tempResult.winner).toBe("tie");
    done();
  })
  
})

