
export function createBoard(strOfMatrices){
	
	let nbrOfPossibleMatrix = strOfMatrices.length/81
	let k = randInt(nbrOfPossibleMatrix)
	let initialBoard = createNullMatrix()
	for (let i =0; i<9; i++){
		for (let j = 0; j<9; j++){
			initialBoard[i][j] = parseInt(strOfMatrices[81*k + 9*i + j])
		}
	}

	let nonNullCells = []
	for(let i=0; i<9; i++){
		for (let j=0; j<9; j++){
			if (initialBoard[i][j]>0){
				nonNullCells.push([i,j])
			}
		}
	}
	let firstMatrix = createRandomMatrix()
	let Animation = [firstMatrix]
	

	for (let nbrAnimation =0; nbrAnimation<20; nbrAnimation ++){
		let matrix = deepCopy(Animation[Animation.length-1])
		for (let i = 0; i<9; i++){
			for (let j=0; j<9; j++){
				if ( checkElement([i,j], nonNullCells) ){
					matrix[i][j] = randInt(9) + 1
				} else {
					 if(matrix[i][j] > 0){
					 	matrix[i][j] = randInt(9) 
					 }
				}
			}
		}
		Animation.push(matrix)
	}
	Animation.push(initialBoard)
	return Animation
}

function randInt(k){
	return (Math.floor(k*Math.random()))
} 

function createNullMatrix() {
	let nullMatrix = []
	for (let i=0; i<9; i++){
		nullMatrix.push([0,0,0,0,0,0,0,0,0])
	}
	return nullMatrix
}

function createRandomMatrix() {
	let randomMatrix = []
	for (let i=0; i<9; i++){
		randomMatrix.push([1,4,3,2,2,5,3,9,2])
	}
	return randomMatrix
}

function checkEquality (L1,L2) {
	if (L1[0] === L2[0]){
		if (L1[1] === L2[1]){
			return true
		}
	} 
	return false
}

function checkElement(element, list){
	for (let i=0; i<list.length; i++){
		if (checkEquality(element, list[i])){
			return true
		}
	}
	return false
}

function deepCopy(matrix){
	let newMatrix = []
	for (let i=0; i<9; i++) {
		let newRow = [...matrix[i]]
		newMatrix.push(newRow)
	}
	return newMatrix
}