var rightDiv = document.getElementById("sectionRight");
var leftDiv = document.getElementById("sectionLeft");
var mainDiv = document.getElementById("main_id");
var subMain = document.getElementById("subMain");
var topHeader = document.getElementById("header_id");
var footer = document.getElementById("footer_id");
var random;
var randWidth;

function changeWidth(){
  randWidth = (Math.floor(Math.random() * 60) +1) 
  rightDiv.style.width = randWidth + "%"
  leftDiv.style.width = randWidth / 2 + "%"
  topHeader.style.height = randWidth * 3 + "px"
  subMain.style.height = randWidth * 4 + "px"
  footer.style.bottom = randWidth * 8 + "px"

}

function changeColor(){
  random = Math.floor(Math.random() * 6);
  changeWidth()
}

var colors =[
  "darkred",
  "grey",
  "darkblue",
  "darkgreen",
  "plum",
  "yellow",
]

rightDiv.addEventListener("mouseover", function(event){
  event.target.style.backgroundColor = colors[random]
  console.log(randWidth)
  changeColor()
})

leftDiv.addEventListener("mouseover", function(event){
  event.target.style.backgroundColor = colors[random]
  changeColor()
})

mainDiv.addEventListener("mouseover", function(event){
  event.target.style.backgroundColor = colors[random]
  changeColor()
})

subMain.addEventListener("mouseover", function(event){
  event.target.style.backgroundColor = colors[random]
  changeColor()
})

topHeader.addEventListener("mouseover", function(event){
  event.target.style.backgroundColor = colors[random]
  changeColor()
})

footer.addEventListener("mouseover", function(event){
  event.target.style.backgroundColor = colors[random]
  changeColor()
})
