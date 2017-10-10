import { Sudoku } from './../js/sudoku-checker.js';

$(document).ready(function() {
  let game = new Sudoku;
  let output = "";
  let x = 0;

  for(let i = 0; i < 9; i++) {
    output += "<div class='row mt-2'>"
    for(let j = 0; j < 9; j++) {
      output += `<div class='col'><form><div class='card bg-primary text-white'><div class='card-header'><div class='form-group'><input type='number' id='input${x}' class='form-control' placeholder='${x}'></div></div><div id='${x}' class='card-body'></div></div></form></div>`
      x += 1;
    }
    output += "</div>"
  }

  $('#sudokuBoard').append(output)

  $('.card-body').click(function(event) {
    // event.preventDefault();
    // Get the body_id and use it to retrieve the value from the form
    let body_id = $(event.currentTarget).attr('id');
    let input_value = parseInt($(`#input${body_id}`).val());
    // Execute some function to check for valid input
    if(game.rowValidator(input_value,0,4)){
      $(event.currentTarget).parents(".card").addClass("bg-success");
      alert("goof move");
      game.board[4][0] = input_value;
    } else {
      alert("bad move");
      $(event.currentTarget).parents(".card").addClass("bg-danger");
    }
  });

});
