import { Sudoku } from './../js/sudoku-checker.js';

describe('Sudoku', function() {
  it('validate rows', function() {
    var sudoku = new Sudoku()
    expect(sudoku.board[0][0]).toEqual(0)
  });
});

describe('Sudoku', function() {
  it('validate columns', function() {
    var colValidator = new Sudoku()
    colValidator.board[1][0] = 1;
    expect(colValidator.columnValidator(1,0,0)).toEqual(false)
  });
});
