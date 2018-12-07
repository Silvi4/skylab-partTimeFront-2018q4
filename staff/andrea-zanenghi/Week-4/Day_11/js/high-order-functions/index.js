// Capitalize First Letter

var months = ['january','february','march','april','may','june','july','august', 'september','october','november','december']

function capArray(arr){return arr.map(function(el){return el[0].toUpperCase() + el.slice(1)})}

console.log(capArray(months))

// Some months starting with J

function filtMonths(arr,what){return arr.filter(function(el){return el[0] === what})}

var monthsJ = filtMonths(months,'j')
console.log(monthsJ)

// Count vowels

var loremIpsum = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.'

function vowelCount(str){
  arr = str.split('')
  vowels = ['a','e','i','o','u']
//  vowCount = arr.filter(function(el){return vowels.includes(el)})
//  return vowCount.length
  vowCount = arr.reduce(function(acc,el){return vowels.includes(el) ? acc +1 : acc},0)
  return vowCount
}

console.log(vowelCount(loremIpsum))

// Great Than Five Letters

function greaterThan(arr,what){return arr.filter(function(el){return el.length > what})}

console.log(greaterThan(months,5))

// Great Than Five Letters

function areAllGreaterThan(arr,what){return arr.some(function(el){return el.length > what})}

// Callback age: 18 filter

var people = [18,20,5,35,2,8]

function greaterThan(age){return age > 18 ? true : false}

function enterClub(person,f){
  return f(person) ? true : false
}

console.log(enterClub(people[1],greaterThan))
console.log(enterClub(people[2],greaterThan))

