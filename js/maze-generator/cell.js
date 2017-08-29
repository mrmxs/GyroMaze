class Cell {
  constructor(x,y) {
    this.setting = null;
    this.right = null;
    this.bottom = null;
    this.x = x;
    this.y = y;
  }

  nextInMatrix(matrix) {
    return {
      top: this.x - 1 === -1 ? null : matrix[this.x - 1][this.y],
      left: this.y - 1 === -1 ? null : matrix[this.x][this.y - 1],
      bottom: this.x + 1 === matrix.length ? null : matrix[this.x + 1][this.y],
      right: this.y + 1 === matrix[0].length ? null : matrix[this.x][this.y + 1],
    };
  }

  equalSet(cell) {
    return cell !== undefined && cell && this.setting === cell.setting;
  }

  copySet(cell) {
    this.setting = cell ? cell.setting : null;
  }

  setRand() {
    return {
      right: () => {
        this.right = Math.round(Math.random() + 0.1) === 1;
      },
      bottom: () => {
        this.bottom = Math.round(Math.random() + 0.3) === 1;
      }
    }
  }
}
