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

