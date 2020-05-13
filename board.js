class Board {
  constructor() {
    this.grid = Board.makeGrid();
  } 

  isEmptyPos(pos) {
    if (!Board.isValidPos(pos)) {
      throw "Not a valid position!"
    }
    return (this.grid[pos[0]][pos[1]] === null)
  }
  
  isOver() {
    if (this.winner != null) {
      return true;
    }

    for (let i = 0; i < this.grid.length; i++) {
      for (let j = 0; j < this.grid.length; j++) {
        if (this.isEmptyPos[i, j]) {
          return false;
        }
      }
    }

    return true;
  }

  placeMark(pos, mark) {
    if (!this.isEmptyPos(pos)) {
      throw "Not an empty position!"
    }

    this.grid[pos[0]][pos[1]] = mark
  }

  print() {
    const strs = []
    for (let i = 0; i < this.grid.length; i++) {
      const marks = []
      for (let j = 0; j < this.grid.length; j++) {
        marks.push(
          this.grid[i][j] ? this.grid[i][j] : " "
        );
      }
      strs.push(`${marks.join('|')}\n`);
    }
    console.log(strs.join('-----\n'));
  }

  winner() {
    const posSeqs = [
      // horizontals
      [[0, 0], [0, 1], [0, 2]],
      [[1, 0], [1, 1], [1, 2]],
      [[2, 0], [2, 1], [2, 2]],
      // verticals
      [[0, 0], [1, 0], [2, 0]],
      [[0, 1], [1, 1], [2, 1]],
      [[0, 2], [1, 2], [2, 2]],
      // diagonals
      [[0, 0], [1, 1], [2, 2]],
      [[2, 0], [1, 1], [0, 2]]
    ];
    for (let i = 0; i < posSeqs.length; i++) {
      const winner = this.winnerHelper(posSeqs[i])
      if (winner != null) {
        return winner;
      }
    }

    return null;
  }

  winnerHelper(posSeq) {
    for (let markIdx = 0; markIdx < Board.marks.length; markIdx++) {
      const targetMark = Board.marks[marksIdx];
      let winner = true;
      for (let posIdx = 0; posIdx < 3; posIdx++) {
        const pos = posSeq[posIdx];
        const mark = this.grid[pos[0]][pos[1]];
        
        if (mark != targetMark) {
          winner = false;
        }
      }

      if (winner) {
        return targetMark;
      }
    }

    return null;
  }

  static isValidPos(pos) {
    return (pos[0] >= 0 && pos[0] < 3) && (pos[1] >= 0 && pos[1] < 3)
  }

  static makeGrid() {
    let grid = [];
    for (let i = 0; i < 2; i++) {
      grid.push([])
      for (let j = 0; j < array.length; j++) {
        grid[j].push(null);
      }
    }
    return grid;
  }
}

Board.marks = ['x', 'o']
