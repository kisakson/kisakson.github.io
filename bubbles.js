var canvas = Raphael(0, 0, 500, 500);
var addmore = "yes";
var worries = [];
var current = 0, i = 0, i2 = 0;

while (addmore === "yes") { //noprotect
  var input = prompt("Give me a worry of yours:");
  var makecircle = canvas.circle(80 + 150*i, 80 + 150*i2, 70);
  makecircle.attr("fill", "#B8D7F1");
  var maketext = canvas.text(80 + 150*i, 80 + 150*i2, input);
  current++;
  i++;
  if (i === 3) {
    i = 0;
    i2++;
  }
  addmore = prompt("Do you have another worry? ('yes' or no)");
  if (current > 8) {
    addmore = "no";
  }
  makecircle.click(pop);
}


function diamond() {
  var x = Math.floor((Math.random() * 400) + 1);
  var y = Math.floor((Math.random() * 400) + 1);
  var animateCircle = Raphael.animation({cx:x, cy:y}, 1000, "bounce");
  this.animate(animateCircle);
}

function pop() {
  this.remove();
}
