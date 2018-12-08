import {piPaTi} from '../src/index.js';

describe('Test hand1 wins', function(){
  test('scissors wins paper', function(done){
    var result = piPaTi("scissors", "paper");
    expect(result).toBe("scissors vs paper => scissors wins!");
    done();
  });
  test('paper wins rock', function(done){
    var result = piPaTi("paper", "rock");
    expect(result).toBe("paper vs rock => paper wins!");
    done();
  });
  test('rock wins scissors', function(done){
    var result = piPaTi("rock", "scissors");
    expect(result).toBe("rock vs scissors => rock wins!");
    done();
  });
});

describe('Test hand2 wins', function(){
  test('paper wins scissors', function(done){
    var result = piPaTi("paper", "scissors");
    expect(result).toBe("paper vs scissors => scissors wins!");
    done();
  });
  test('paper wins rock', function(done){
    var result = piPaTi("rock", "paper");
    expect(result).toBe("rock vs paper => paper wins!");
    done();
  });
  test('rock wins scissors', function(done){
    var result = piPaTi("scissors", "rock");
    expect(result).toBe("scissors vs rock => rock wins!");
    done();
  });
});
describe('Test tie cases', function(){
  test('scissors vs scissors', function(done){
    var result = piPaTi("scissors", "scissors");
    expect(result).toBe("scissors vs scissors => tie!");
    done();
  });
  test('rock vs rock', function(done){
    var result = piPaTi("rock", "rock");
    expect(result).toBe("rock vs rock => tie!");
    done();
  });
  test('paper vs paper', function(done){
    var result = piPaTi("paper", "paper");
    expect(result).toBe("paper vs paper => tie!");
    done();
  });
});