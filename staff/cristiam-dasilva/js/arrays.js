// Binary search
var arr = [];
for(i=0 ; i<1000000 ; i++){
  arr.push(i);
}

function binarySearch(arr,item){
  var firstIndex = 0;
  var lastIndex = arr.length - 1;
  var middleIndex = Math.floor((lastIndex + firstIndex) / 2);

  while(arr[middleIndex] != item && firstIndex < lastIndex){
    if(item < arr[middleIndex]) {
      lastIndex = middleIndex - 1;

    } else if (item > arr[middleIndex]){
      firstIndex = middleIndex + 1;
    }

    middleIndex = Math.floor((lastIndex + firstIndex) / 2);
  }

  if(arr[middleIndex] == item) {
    return middleIndex;
  } else {
    return -1;
  }
  
}

console.time('binary');
console.log(binarySearch(arr,-1));
console.timeEnd('binary');


console.time('indexOf');
console.log(arr.indexOf(-1));
console.timeEnd('indexOf');