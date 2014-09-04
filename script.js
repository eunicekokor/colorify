$(document).ready(function(){
  
var red= 0;
var pink = 0;
var blue = 0;
var rando = "#";
var list = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
obj = {};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getNewColor(){
for (i = 0; i < 6; i++){
  rando += list[getRandomInt(16, 0)];
  console.log(rando)
}
}
  
function clearColor(){
  rando = "#";
}
  
$('#red').click(function(){
red++;
  getNewColor();
  $(".box").css('background', rando);
  console.log("you have clicked " + red);
  $('#red').html("<center><p><h2>you have seen</h2> <h1>" + red + " </h1> <h2>colors so far.<br><br>this color is</h2><h3>" + rando + "</p></h3></center>");
  clearColor();
});
  

  
});