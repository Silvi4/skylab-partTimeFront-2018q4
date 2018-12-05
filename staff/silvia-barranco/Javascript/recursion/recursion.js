//remove-repeat-chars
//input -> removeRepeatChars('aabcbcb') output -> abc

var text = "aabbcc"
function removeRepeatCharts(charts, result) {
  result[charts[charts.length-1]] = charts[charts.length-1] // {c: c}
  charts = charts.slice(charts, charts.length-1) // aabbc una letra menos
  if(charts.length > 0) {
	removeRepeatCharts(charts, result)
  } else {
	var definitiveResult = ''
	for(chart in result) {
		definitiveResult += result[chart]
	}
	console.log('El resultado es -->', definitiveResult)
	return definitiveResult
  }
}
removeRepeatCharts(text, {})


//OTRO EJEMPLO
var arr= [1,2,3,4,5,6]
function suma(arr){
    if(arr.length == 1){
        return arr[0];
    }
    var el = arr.pop();
    return el + suma(arr)
}
suma(arr)

//FIBONACCI
function reserveString (str){
    if (stringToArray.length == 1){
        return str;
    }
    var lastLetter= string.substr(-1);
    var restoDelString= string.substr(0, string.length-1);
    return lastLetter + reserveString(lastLetter + restoDelString);
}
var str = "hola"
