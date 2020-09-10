import {removeCouple, removeNumber, myDeleteFunction, createIndicesArray, checkEquality, deepCopy} from "./GenericFunctions"


export function nakedSubset(data, animation){
	let makeChange = false 
	for (let i=0; i<9; i++){
		if (nakedSubsetRow(i, data, animation)){ // do not write something like "if (a || b || c)" because if a is true, neither test b nor c is tested
			makeChange = true 
		}
		if (nakedSubsetColumn(i, data, animation)){
			makeChange = true 
		}
		if (nakedSubsetBox(i, data, animation)){
			makeChange = true 
		}
	}
	return makeChange
}

export function nakedSubsetRow(i, data, animation){
	let makeChange = false
	let indices = {}
	let occurence = {}
	// Initialisation of indices and occurences
	for (let j = 0; j<9; j++){
		if (typeof(data[i][j]) === "object"){
			let S = data[i][j].toString()
			occurence[S] = 0
			indices[S] = [] 
		}
	}

	for (let j = 0; j<9; j++){
		if (typeof(data[i][j]) === "object"){
			let S = data[i][j].toString()
			occurence[S]++
			indices[S].push(j)
		}
	}

	for (const currentNumbers in occurence){
		let currentLength = currentNumbers.length - Math.floor(currentNumbers.length/2) // possibleNumbers is a string of type: "x,x,x,x,x"
		if (occurence[currentNumbers] === currentLength) {
			// here we have to remove the elements of currentNumbers from all the others cells
			let totalIndices = createIndicesArray(9)
			myDeleteFunction(totalIndices, indices[currentNumbers])
			let L1 = data[i][indices[currentNumbers][0]]
			for (let k=0; k<totalIndices.length; k++){
				let idx = totalIndices[k]
				if (myDeleteFunction(data[i][idx], L1)){
					makeChange = true 
					let myData = deepCopy(data)
					animation.push(myData)
				}
			}
		}
	}
	return makeChange
}

export function nakedSubsetColumn(j, data, animation){
	let makeChange = false 
	let indices = {}
	let occurence = {}
	// Initialisation of indices and occurences
	for (let i = 0; i<9; i++){
		if (typeof(data[i][j]) === "object"){
			let S = data[i][j].toString()
			occurence[S] = 0
			indices[S] = [] 
		}
	}

	for (let i = 0; i<9; i++){
		if (typeof(data[i][j]) === "object"){
			let S = data[i][j].toString()
			occurence[S]++
			indices[S].push(i)
		}
	}

	for (const currentNumbers in occurence){
		let currentLength = currentNumbers.length - Math.floor(currentNumbers.length/2) // possibleNumbers is a string of type: "x,x,x,x,x"
		if (occurence[currentNumbers] === currentLength) {
			// here we have to remove the elements of currentNumbers from all the others cells
			let totalIndices = createIndicesArray(9)
			myDeleteFunction(totalIndices, indices[currentNumbers])
			let L1 = data[indices[currentNumbers][0]][j]
			for (let k=0; k<totalIndices.length; k++){
				let idx = totalIndices[k]
				if (myDeleteFunction(data[idx][j], L1)){
					makeChange = true 
					let myData = deepCopy(data)
					animation.push(myData)
				}
			}
		}
	}
	return makeChange
}


export function nakedSubsetBox(k, data, animation){
	let makeChange = false
	let occurence = {}
	let coordonate = {}
	// Initialisation of indices and occurences
	let i = Math.floor(k/3)*3
	let j = Math.floor(k%3)*3
	for (let i1 = i; i1<i+3; i1++){
		for (let j1 = j; j1<j+3; j1++){
			let S = data[i1][j1].toString()
			occurence[S] = 0
			coordonate[S] = []
		}
	}

	for (let i1 = i; i1<i+3; i1++){
		for (let j1 = j; j1<j+3; j1++){
			let S = data[i1][j1].toString()
			occurence[S]++
			coordonate[S].push([i1, j1])
		}
	}

	for (const currentNumbers in occurence){
		let currentLength = currentNumbers.length - Math.floor(currentNumbers.length/2)
		if (occurence[currentNumbers] === currentLength){
			let totalCoordonates = []
			let currentCoord = coordonate[currentNumbers][0]
			for (let i1 = i; i1<i+3; i1++){
				for (let j1 = j; j1<j+3; j1++){
					totalCoordonates.push([i1,j1])
				}
			}
			for(let i1 = 0; i1<coordonate[currentNumbers].length; i1++ ){
				let coordToDelete = coordonate[currentNumbers][i1]
				removeCouple(totalCoordonates, coordToDelete)
			}
			let L1 = data[currentCoord[0]][currentCoord[1]]
			for(let i1 = 0; i1<totalCoordonates.length; i1++){
				let coord = totalCoordonates[i1]
				if (myDeleteFunction(data[coord[0]][coord[1]], L1)){
					let myData = deepCopy(data)
					animation.push(myData)
					makeChange = true 
				}
			}
		}
	}
	return makeChange
}






