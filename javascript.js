var canvas = Raphael(0, 0, 500, 500);

for (var i = 0; i < 5; i++) {
  for (var i2 = 0; i2 < 5; i2++) {
    var topcircle = canvas.circle(50 + 80*i, 50 + 80*i2, 30);
    topcircle.attr("fill", "pink");
    topcircle.click(diamond);
  }
}


function pearl() {
  this.remove();
  var x = Math.floor((Math.random() * 400) + 1);
  var y = Math.floor((Math.random() * 400) + 1);
  var newcircle = canvas.circle(x, y, 30);
  newcircle.attr("fill", "pink");
  newcircle.click(pearl);
}

function diamond() {
  var x = Math.floor((Math.random() * 400) + 1);
  var y = Math.floor((Math.random() * 400) + 1)
  var animateCircle = Raphael.animation({cx:x, cy:y}, 1000, "bounce");
  this.animate(animateCircle);
}
