export class Sudoku {
  constructor() {
    this.board = new Array(9);
    for (let i = 0; i < 9; i++) {
      this.board[i] = [0,0,0,0,0,0,0,0,0];
    }
  }


  // Initializes every sudoku with a 9x9 matrix
  rowValidator(n, x, y) {
    console.log(this.board);
    for(let i = 0; i < 9; i++){
      if(this.board[y][i] === n && i != x){
        return false;
      }
    }
    return true;
  }
};
