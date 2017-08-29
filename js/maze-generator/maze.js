class Maze {
  constructor(x, y) {
    this.matrix = [];

    for (let i = 0; i < x; i++) {
      this.matrix[i] = [];
      for (let j = 0; j < y; j++) {
        this.matrix[i][j] = new Cell(i, j);
      }
	  }

	  this.matrix = EllersAlgorihm.run(this);
  }

  row(i) {
    return {
      isLast: i === this.matrix.length - 1,
      isOnlyInSetCell: cell => {
        const result =
          (cell.y - 1 === -1 ||
            !cell.equalSet(cell.nextInMatrix(this.matrix).left))
            &&
          (cell.y + 1 === this.length ||
             !cell.equalSet(cell.nextInMatrix(this.matrix).right));

         return result;
      },
      setHasBottomlessCell: cell => {
        let bottomless = false;
        for (let j = 0; j < cell.y; j++) {
          bottomless = bottomless ||
            (cell.equalSet(this.matrix[i][j]) && !this.matrix[i][j].bottom);
        }

        return bottomless;
      }
    }
  }

  column(i) {
    return {
      isLast: i === this.matrix[0].length - 1,
    }
  }

 cell(x, y) {
   return {
     getNextCell: () => {
       return {
         left: (y - 1 === -1 ? null
           : this.matrix[x][y - 1]),
         right: (y + 1 === this.matrix[0].length ? null
           : this.matrix[x][y + 1]),
         top: (x - 1 === -1 ? null
           : this.matrix[x - 1][y]),
         bottom: (x + 1 === this.matrix.length ? null
           : this.matrix[x + 1][y]),
       }
     }
   };
 }

 stringify() {
   let strMaze = "";

   for (let i = -1; i < this.matrix.length; i++) {
     strMaze += i === -1 ? " " : "│";
     for (let j = 0; j < this.matrix[0].length; j++) {
       strMaze += i === -1 ? "_ "
         : (this.matrix[i][j].bottom ? "_" : " ") +
           (this.matrix[i][j].right ? "│" : " ");
     }
     strMaze += "\n";
   }

   console.log(strMaze);
   return strMaze;
 }

 stringify2() {
   let strMaze = "";

   for (let i = -1; i < this.matrix.length; i++) {
     strMaze += i === -1 ? " " : "│";
     for (let j = 0; j < this.matrix[0].length; j++) {
       strMaze += i === -1 ? ""
          : (`   `) +
         // : (` ${String.fromCodePoint(this.matrix[i][j].setting + 200)} `) +
           (this.matrix[i][j].right ? "│" : ".");
     }
     strMaze += "\n";
     strMaze += i === -1 ? " " : "│";
     for (let j = 0; j < this.matrix[0].length; j++) {
       strMaze += i === -1 ? "___ "
         : (this.matrix[i][j].bottom ? "___" : " . ") +
           (this.matrix[i][j].right ? "│" : " ");
     }
     strMaze += "\n";
   }

   console.log(strMaze);
   return strMaze;
 }

}
