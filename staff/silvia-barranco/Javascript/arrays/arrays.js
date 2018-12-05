//isArray

function isArray(input){
    return typeof input == Array ? "true" : "false"
}
isArray('Skylab')

//joinElements
function arrayStr (arr){
    return arr.join(", ")
}
arrayStr(['John','George','Ringo','Paul'])

// array_Clone
function cloneArr (arr){
    return arr.slice()
}
cloneArr([1, 2, 4, 0])
cloneArr([1, 2, [4, 0]])


//findDifferences
//FALTA

function findDifference (a, b){
    var shortest = a.length > b.length ? b : a;
    var longest = a.length > b.length ? b : a;
    var diffs= longest.slice(shortest.length);

    for (var i=0; i<shortest.length; i++ ){
        if((Array.isArray(a[i]) && !Array.isArray(b[i])) || (!Array.isArray(a[i]) && Array.isArray(b[i]))){
            diffs.push(a[i]);
            diffs.push(b[i]);
        } else if (!Array.isArray(a[i]) && !Array.isArray(b[i])){
            if (a[i] !== b[i]){
                diffs.push(a[i]);
                diffs.push(b[i]);
            }
        } else {
            diffs.push(findDifference(a[i], b[i]));
        }
    } return diffs;    
}
console.log(findDifference(arrA. arrB));


//Sum and Product
function sumProdArr (arr){
    var sum = 0;
    var prod= 1;
    for (var i =0; i< arr.length; i++){
        sum += arr[i]
        prod *= arr[i]
    } return "The sum is: " + sum + " and the product is: " +  prod
}
sumProdArr([1, 2, 3, 4])


//addItems
function addItems (arr,item){
    var empty= [];
    for (var i=0; i<arr.item; i++){
        empty.push(arr[i])        
    }
    empty.push(item)
    return empty
}
addItems([5,4,3,2,1], 'hola')

//generateArrayLength
function arrayLength (start, leng){
    var myArr = new Array (leng);
    for (var i = 0; i < leng; i++, start++){        
        myArr[i] = start
    }
    return myArr;
}
console.log(arrayLength(1, 6));

//last
function lastElement (arr, n){
    if (n === undefined){
        return arr.slice(-1);
    }
    return arr.slice(-n)
}    
console.log(lastElement([7, 9, 0, -2],3));

//sortItems
function sortItems(arr){
    return arr.sort();
}
console.log(sortItems([ 3, 8, 7, 6, 5, -4, -3, 2, 1 ]))

//getRandom
function getRandom(arr){
    var random = Math.floor(Math.random()*arr.length);
    return random;
}
console.log(getRandom([ 3, 8, 7, 6, 5, -4, -3, 2, 1 ]))

//findDuplicates
function findDuplicates(arr){
    var result = [];
    arr.forEach(function(element, index) {      
        if (arr.indexOf(element, index + 1) > -1) {        
        if (result.indexOf(element) === -1) {
          result.push(element);
            }  
        }  
    });
    return result;
}
console.log(findDuplicates([10, 20, 10, 40, 60]))

//mergeArrays
function margeArrays (arr1, arr2){
    var result= [];
    var obj= {};
    var arr =  arr1.concat(arr2);
    for (var i = 0; i< arr.length; i++){
        obj[arr[i]]=0;
    }
    for (i in obj){
        result.push(i);
    }
 return result;
}
var array1 = [1, 2, 3]; 
var array2 = [2, 30, 1]; 
console.log(margeArrays(array1, array2));

//separateEven
function separateEven(numbers) {
    if(numbers.length==0)
        return [];
    var result = [numbers[0]];
    for(var i=1; i<numbers.length; i++) {
        if((numbers[i] % 2 + numbers[i-1] % 2) == 0) {
        result.push("-");
        }
        result.push(numbers[i]);  
    }
    return result;
  }
console.log(separateEven("025468"));

//mostFrequentItem
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var counts = {};
var compare = 0;
var mostFrequent;

function mostFrequentItem(array){
    for (var i = 0; i< array.length; i++){
        var a = array[i];
        if(counts[a] === undefined){
            counts[a] = 1;
        }else {
            counts[a] = counts[a] + 1;
        }
    }
    return counts;
}
console.log(mostFrequentItem(arr1)); 


//moveElement
function moveElement(arr, old_index, new_index){
    if (new_index >= arr.length){
        var x = new_index - arr.length +1;
        while(x--){
            arr.push(undefined);
        }
    } arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr;
}
console.log(moveElement([1, 2, 3], 0, 1)); 

//swapCase
function swapCase(str){
    var newStr= '';
    for (var i = 0; i < str.length; i++){
        if (str[i] === str[i].toLowerCase()){
            newStr += str[i].toUpperCase();
        }else {
            newStr += str[i].toLowerCase();
        }
    } return newStr;
}
var text = 'The Quick Brown Fox' 
console.log(swapCase(text));

//Print elements array
var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
function printArray (arr){
    for (var i =0; i < arr.length; i++){
        console.log("row " + i);
        for (var j = 0; j < arr[i].length; j++){
            console.log(" " + arr[i][j]);
        }
    } return arr;
}
console.log(printArray(a));

//array_filled (string)
function array_filled(n, val){
    return Array.apply(null, Array(n)).map(Array.prototype.valueOf,val);
}
console.log(array_filled(6, 'default'));    

//Sum squares
function suma(arr){
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
        sum += Math.pow(arr[i], 2);
    } return sum;
}
console.log(suma([1,2,3,4]))

//VOLVER A REPETIR A PARTIR DE AQUI
// removeDuplicate
function removeDuplicates(num) {
    len=num.length,
    out=[],
    obj={};
   
    for (var i = 0;  i <len; i++) {
      obj[num[i]]=0;
    }
    for (i in obj) {
      out.push(i);
    }
    return out;
  }
  var Mynum = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
  result = removeDuplicates(Mynum);
  console.log(Mynum);
  
// showChoices
color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
o = ["th","st","nd","rd"];

function Ordinal(n) {
    var o = ["th","st","nd","rd"],
    x = n % 100;
    return x + (o[(x-20)%10]||o[x]||o[0]);
 }

for(n = 0; n < color.length; n++){
 var ordinal = n + 1;
 var output = (Ordinal(ordinal) + " choice is " + color[n] + ".");
console.log(output);
}

// showLeapYears
function leap_year_range(st_year, end_year) {
    var year_range = [];
    for (var i = st_year; i <= end_year; i++){
         year_range.push(i);
    }
    var new_array = [];
    year_range.forEach(function(year) { 
    if (test_LeapYear(year)) 
    new_array.push(year);
    });
    return new_array;
    }
    function test_LeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
        return year;
    } else {
        return false;
    }
} 
console.log(leap_year_range(2000,2012));
//otra forma

function findLeapYears(st_year, end_year){
var leapYears=[];
for (var i = st_year ; i <= end_year ; i++){
    if (i % 4 == 0){
        leapYears.push(i)
    }
} return leapYears;
}

//shuffleArray
function shuffle(arr) {
    var j, x, i;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
    }
    return arr;
}
myArr = [5,5,1,4,6,2,1]
shuffle(myArr)

//binarySearch

var items = [1, 2, 3, 4, 5, 7, 8, 9];
function binarySearch(arr, item){
    var firstIndex = 0;
    var lastIndex = arr.length -1;
    var middleIndex = Math.floor((lastIndex + firstIndex) / 2 );

    while(arr[middleIndex] != item && firstIndex < lastIndex){
        if(item < arr[middleIndex]){
            lastIndex = middleIndex - 1
        } else if ( item > arr[middleIndex]){
            firstIndex = middleIndex + 1
        }
        middleIndex = Math.floor((lastIndex + firstIndex) / 2 );
       //actualizar  middleIndex a la nueva mitad del array
    }
    if (arr[middleIndex] == item){
        return middleIndex
    } else{
     return -1;
    }
}

//sumPositions
function Arrays_sum(array1, array2){
    var result = [];
    var ctr = 0;
    var x=0;

    if (array1.length === 0) 
    return "array1 is empty";
    if (array2.length === 0) 
    return "array2 is empty";   

    while (ctr < array1.length && ctr < array2.length){
        result.push(array1[ctr] + array2[ctr]);
        ctr++;
    }

    if (ctr === array1.length){
        for (x = ctr; x < array2.length; x++){
        result.push(array2[x]);
        }
    } else{
        for (x = ctr; x < array1.length; x++){
            result.push(array1[x]);
        }
    }
    return result;
}
console.log(Arrays_sum([1,0,2,3,4], [3,5,6,7,8,13]));

//generateArraySteps
function rangeBetwee(start, end){  
	if (start > end) {
		var arr = new Array(start - end + 1);
		for (var i = 0; i < arr.length; i++, start--) {
			resarrult[i] = start;
		}
		return arr;
	}else {
		var arro = new Array(end-start+1);         
		for (var j = 0; j < arro.length; j++, start++){
		    arro[j] = start;
		}
      	return arro;
	}
}
console.log(rangeBetwee(4, 7));
console.log(rangeBetwee(-4, 7));

//flattenArray
var flatten = function(a, shallow,r){
    if(!r){ r = []}     
    if (shallow) {
    return r.concat.apply(r,a);
    }        
    for(var i=0; i<a.length; i++){
        if(a[i].constructor == Array){
              flatten(a[i],shallow,r);
        }else{
              r.push(a[i]);
        }
    }
      return r;
  }  
  console.log(flatten([1, [2], [3, [[4]]],[5,6]]));  
  console.log(flatten([1, [2], [3, [[4]]],[5,6]], true))

  //unionArray
  function union(arra1, arra2) {  
    if ((arra1 == null) || (arra2==null)) 
      return void 0;    
    var obj = {};   
    for (var i = arra1.length-1; i >= 0; -- i)
       obj[arra1[i]] = arra1[i];   
    for (var i = arra2.length-1; i >= 0; -- i)
       obj[arra2[i]] = arra2[i];   
    var res = [];
   
    for (var n in obj){    
      if (obj.hasOwnProperty(n)) 
        res.push(obj[n]);
    }   
    return res;
  }
  console.log(union([1, 2, 3], [100, 2, 1, 10]));

  // removeFalsy
  function filter_array(test_array) {
    var index = -1,
    arr_length = test_array ? test_array.length : 0,
    resIndex = -1,
    result = [];
    while (++index < arr_length) {
        var value = test_array[index];
        if (value) {
            result[++resIndex] = value;
        }
    }
    return result;
}
console.log(filter_array([NaN, 0, 15, false, -22, '',undefined, 47, null]));

//first
var first =  function(array, n) {
    if (array == null) 
        return void 0;
    if (n == null) 
        return array[0];
    if (n < 0)
        return [];
  return array.slice(0, n);
};
console.log(first([7, 9, 0, -2]));

//sortObjectsTitle
var library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];
 
 function compare_to_sort(x,y){
   if (x.title < y.title)
     return -1;
   if (x.title > y.title)
     return 1;
   return 0;
 } 
 console.log(library.sort(compare_to_sort));

 //findPairSum
 function twoSum(nums, target_num) {
    var map = [];
    var indexnum = [];    
    for (var x = 0; x < nums.length; x++){
        if (map[nums[x]] != null){
            var index = map[nums[x]];
            indexnum[0] = index+1;
            indexnum[1] = x+1;
            break;
        }else{
            map[target_num - nums[x]] = x;
        }
    }
    return indexnum;
}
  console.log(twoSum([10,20,10,40,50,60,70],50));

//longestCommon
function longest_common_starting_substring(arr1){
    var arr= arr1.concat().sort(),
    a1= arr[0], a2= arr[arr.length-1], L= a1.length, i= 0;
    while(i< L && a1.charAt(i)=== a2.charAt(i)) i++;
    return a1.substring(0, i);
}
console.log(longest_common_starting_substring(['go', 'google'])); 

//fillArray
function num_string_range(start, end, step){
    var range = [];
    if ((step === 0) || (typeof start == "undefined" || typeof end ==    "undefined") || (typeof start != typeof end))
        return false;
  
    if (end < start) {
        step = -step;
    }
    if (typeof start == "number") {
        while (step > 0 ? end >= start : end <= start) {
            range.push(start);
            start += step;
        }
    }else if (typeof start == "string") {
        if (start.length != 1 || end.length != 1) {
            throw TypeError("Strings with one character are supported.");
        }
        start = start.charCodeAt(0);
        end = end.charCodeAt(0);
        while (step > 0 ? end >= start : end <= start) {
            range.push(String.fromCharCode(start));
            start += step;
        }
    }else {
        throw TypeError("Only string and number are supported");
    }
    return range;
}
console.log(num_string_range('a', "z", 2));

////////////////////////////////////////////
//removeElement
function remove_array_element(arr, item){
    for( var i = arr.length-1; i--;){
        if ( arr[i] === item) arr.splice(i, 1);
    }
    return arr;   
}
console.log(remove_array_element([2, 5, 9, 6], 5));

//emptyArray
function emptyArray(arr){
    return arr.length = 0;
}
console.log(emptyArray([2,3,4,5]));

//array_filled (numeric)
function array_filled(n, val){
    return Array.apply(null, Array(n)).map(Number.prototype.valueOf,val);
}
console.log(array_filled(6, 0))

//filterFalsy
function filterFalsy(arr){
    return arr.filter(Boolean, null, 0)
}
console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));