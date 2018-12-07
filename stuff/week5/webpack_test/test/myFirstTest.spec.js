import {sum} from '../src/index.js';

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
