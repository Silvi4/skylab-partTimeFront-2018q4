//is_object
var is_object = function(val){
    return typeof(val) == 'object';
}
var obj = {
    an: "X"
}
console.log(is_object(obj));

//Create object car
function car(brand, model, color){
    this.brand = brand,
    this.model = model,
    this.color = color,
    this.message = function(){
        return 'My black Sean León is great!';
    }
}
//var seat = new car('Seat', 'Leon', 'Red');
//console.log(seat.message());