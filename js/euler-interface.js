import { Euler } from './../js/euler.js';

$(document).ready(function() {

  $('#problem1').submit(function(event) {
    event.preventDefault();
    var euler = new Euler;
    var answer1 = euler.solveProblem1();
    $("#answer1").text("The answer is: "+ answer1);
  });
});
