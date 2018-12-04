function stringCalculator(string){
    var numbers = string.split(",");
    var result = 0;
    numbers.forEach(function(num){
        result += parseInt(num);
    })
    return result;
}
console.log(stringCalculator("1,2,3,4"));

function isPalindrome(string){
    var array = string.replace(/\s/g,"").toLowerCase().split("");
    var arrayrev = array.map(function(e){
        return e;
    });
    arrayrev.reverse()
    for (var i= 0; i<array.length;i++){
        if(array[i]!=arrayrev[i]){
            return false
        }
    }
    return true;
}
console.log(isPalindrome("madam"));
console.log(isPalindrome("nurses run"));
console.log(isPalindrome("Carles"));

function Matrix(num){
    var matrix=[]
    for(var i = 0; i<num; i++){
        var row = []
        for(var j=0;j<num; j++){
            var element = i===j?1:0;
            row.push(elment);
        }
        matrix.push(row);
    }
    return matrix;
}
console.log(Matrix(5));
console.log(Matrix(3));
console.log(Matrix(25));
