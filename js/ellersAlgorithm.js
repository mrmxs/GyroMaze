class EllersAlgorihm {
  static run(maze) {
    let matrix = maze.matrix;
    const x = matrix.length,
          y = matrix[0].length;
	  let settings = new Settings(x*y);
    let i = 0, j = 0;

    for (i = 0; i < x; i++) {
      for (j = 0; j < y; j++) {
        // set
        const cell = matrix[i][j];
        const topCell = cell.nextInMatrix(matrix).top;

        if (topCell && !topCell.bottom) {
          cell.copySet(topCell);
        }
        if (!cell.setting) {
          cell.setting = settings.pop();
        }
      }

      for (j = 0; j < y ; j++) {
        const cell = matrix[i][j];

        // right
        if (maze.column(j).isLast) {
          cell.right = true;
        } else if (maze.row(i).isLast) {
          cell.right = cell.equalSet(
            cell.nextInMatrix(matrix).right);  //todo smth wrong - fix
        } else  {
          cell.setRand().right();
          if (!cell.right) {
            const rightCell = cell.nextInMatrix(matrix).right;

            settings.push(rightCell.setting);
            rightCell.copySet(cell);
          }
        }
      }

      for (j = 0; j < y; j++) {
        // bottom
        const cell = matrix[i][j];

        if (!maze.row(i).isLast) {
          if (maze.row(i).isOnlyInSetCell(cell)) {
            cell.bottom = false;
          } else if (cell.equalSet(
              cell.nextInMatrix(matrix).right)) {
            cell.setRand().bottom();
          } else if (maze.row(i).setHasBottomlessCell(cell)) {
            cell.setRand().bottom();
          } else  {
            cell.bottom = false;
          }
        } else {
          cell.bottom = true;
        }
      }
    }

    return maze.matrix;
  }

}
