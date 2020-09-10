export function isValid(board, row, col, k) {
    for (let i = 0; i < 9; i++) {
        const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
        const n = 3 * Math.floor(col / 3) + i % 3;
        if (board[row][i] === k || board[i][col] === k || board[m][n] === k) {
          return false;
        }
    }
    return true;
}


export function sudokuSolver(data, animation) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (data[i][j] == 0) {
                for (let k = 1; k <= 9; k++) {
                    if (isValid(data, i, j, k)) {
                        data[i][j] = k;
                        let newData = deepCopy(data)
                        animation.push(newData)
                        if (sudokuSolver(data, animation)) {
                            return true;
                        } else {
                            data[i][j] = 0;
                            let newData = deepCopy(data)
                            animation.push(newData)
                        }
                    }
                }
                return false;
            }
        }
    }
    return true;
}

export function deepCopy(matrix){
	let newMatrix = []
	for (let i=0; i<9; i++) {
		let newRow = [...matrix[i]]
		newMatrix.push(newRow)
	}
	return newMatrix
}


function getValidNumbers (i,j,data) {
    let validNumbers = []
    for (let number=1; number<10; number++){
      if (isValid(data, i,j,number)){
        validNumbers.push(number)
      }
    }
    return validNumbers
  }

  export function getMatrixOfValidNumbers (data) {
    let newMatrix = data
    for (let i=0; i<9; i++){
      for (let j = 0; j<9; j++){
        if (newMatrix[i][j] == 0 || typeof(newMatrix[i][j]) === "object") {
          let validNumbers = getValidNumbers(i,j,data)
          newMatrix[i][j] = validNumbers
        }
      }
    }
    return newMatrix
  }











