export class Sudoku {
  // Initializes every sudoku with a 9x9 matrix
  constructor() {
    this.board = new Array(9);
    for (let i = 0; i < 9; i++) {
      this.board[i] = [0,0,0,0,0,0,0,0,0];
    }
  }
  rowValidator(n,x,y) {
    console.log(this.board);
    for(let i = 0; i < 9; i++){
      if(this.board[y][i] === n && i != x){
        return false;
      }
    }
    return true;
  }

  columnValidator(n,x,y) {
    console.log(this.board);
    for(let i = 0; i < 9; i++){
      if(this.board[i][x] === n && i != y){
        return false;
      }
    }
    return true;
  }
};
