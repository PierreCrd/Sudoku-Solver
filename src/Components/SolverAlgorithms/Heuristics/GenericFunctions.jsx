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

export function updateGridAfterFill(i, j, number, data, animation){
	// Check the Column
	for (let i1 = 0; i1 < 9; i1++){
		if (typeof(data[i1][j]) === "object"){
			let currentNumbers = data[i1][j]
			for (let k = 0; k<currentNumbers.length; k++){
				let currentNumber = currentNumbers[k]
				if (currentNumber === number){
					currentNumbers.splice(k,1)
					let myData = deepCopy(data)
					animation.push(myData)
				}
			}
		}
	}

	// Check the Row
	for (let j1 = 0; j1 < 9; j1++){
		if (typeof(data[i][j1]) === "object"){
			let currentNumbers = data[i][j1]
			for (let k = 0; k<currentNumbers.length; k++){
				let currentNumber = currentNumbers[k]
				if (currentNumber === number){
					currentNumbers.splice(k,1)
					let myData = deepCopy(data)
					animation.push(myData)
				}
			}
		}
	}

	// Check the box
	let iBox = i - i%3
	let jBox = j - j%3
	for (let i1 = iBox; i1 < iBox + 3; i1++){
		for (let j1 = jBox; j1 < jBox + 3; j1++){
			if (typeof(data[i1][j1] === "object")){
				let currentNumbers = data[i1][j1]
				for (let k = 0; k<currentNumbers.length; k++){
					let currentNumber = currentNumbers[k]
					if (currentNumber === number) {
						currentNumbers.splice(k, 1)
						let myData = deepCopy(data)
						animation.push(myData)
					}
				}
			}
		}
	}
	return 
}

// test if L2 is a subset of L1 in O(n1+n2) time complexity
export function isSubset(L1, L2){
	//this approach works because L1 and L2 are sorted
	let i1 = 0
	let i2 = 0
	let n1 = L1.length
	let n2 = L2.length
	if (n2>n1){
		return false
	}
	while (i2<n2 && i1<n1){
		if (L2[i2]<L1[i1]){
			return false
		} else if (L2[i2]>L1[i1]){
			i1++
		} else {
			i1++
			i2++
		}
	}
	return (i2===n2)
}

//Take all the elements of L2, and remove them from L1 in O(n1+n2) time complexity
export function myDeleteFunction(L1, L2){
	//Again,  works because the list are sorted
	let intersect = false 
	if (typeof(L1) === "number") {
		return false
	}
	let toDelete = []
	let i1 = 0
	let i2 = 0
	let n1 = L1.length
	let n2 = L2.length
	while (i2<n2 && i1<n1){
		if (L2[i2]<L1[i1]){
			i2++
		} else if (L2[i2]>L1[i1]){
			i1++
		} else {
			intersect = true 
			toDelete.push(i1)
			i1++
			i2++
		}
	}
	if (toDelete.length){
    	let count = 0
		for (let i=0; i<toDelete.length; i++){
			let index = toDelete[i]
			L1.splice(index-count,1)
      	count++
		}
	}
	return intersect
}

// Remove a given Number from a list (Used for the rows and columns)
export function removeNumber(L, number){
	for (let i = 0; i<L.length; i++){
		if (L[i] === number){
			L.splice(i, 1)
			return
		}
	}
}

//Remove a couple of index from a list (Used for the boxes)
export function removeCouple(L, C){
	for (let i=0; i<L.length; i++){
		let C2 = L[i]
		if (isSubset(C, C2)){
			L.splice(i, 1)
			return
		}
	}
}

export function createIndicesArray(n) {
	let indices = []
	for (let i=0; i<n; i++){
		indices.push(i)
	}
	return indices
}



export function checkEquality(L1, L2) {
	let n1 = L1.length
	let n2 = L2.length
	if (n1 !== n2){
		return false
	}
	let i1 = 0
	let i2 = 0
	while (i1<n1){
		if (L1[i1] === L2[i2]) {
			i1++
			i2++
		} else {
			return false
		}
	} 
	return true
}
function deepCopyArray(myArray){
	if(typeof(myArray) === "number"){
		return myArray
	}
	let newArray = [...myArray]
	return newArray
}

export function deepCopy(matrix){
	let myCopy = []
	if (typeof(matrix) !== "object"){
		return matrix
	}
	for (let i = 0; i < matrix.length; i++){
		let currentElement = deepCopy(matrix[i])
		myCopy.push( currentElement)
	}
	return myCopy

}

export function deepCopy2(matrix){
    let newMatrix = []
    for (let i=0; i<9; i++) {
        let newRow = [...deepCopyArray(matrix[i])]
        newMatrix.push(newRow)
    }
    return newMatrix
}