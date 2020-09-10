import {isValid, updateGridAfterFill, deepCopy} from "./GenericFunctions"

export function loneNumber(data, animation) {
	let makeChange = false
	for(let i=0; i<9; i++){
		if (loneNumberRow(i,data, animation)){
			makeChange = true
		}	
		if (loneNumberColumn(i,data, animation)){
			makeChange = true
		}
		if (loneNumberBox(i,data, animation)){
			makeChange = true
		}
	}
	return makeChange
}


export function loneNumberRow(i, data, animation){
	let makeChange = false 
	let occurence = {}
	let coordonates = {}
	for (let i=1; i<10; i++){
		occurence[i] = 0
		coordonates[i] = []
	}
	for (let k = 0; k<9; k++){
		if (typeof(data[i][k]) === "object"){
			let currentList = data[i][k]
			for (let idx=0; idx<currentList.length; idx++){
				let currentNumber = currentList[idx]
				occurence[currentNumber]++
				coordonates[currentNumber] = k
			}
		}
	}
	for (let number=1; number<10; number++){
		if (occurence[number] === 1){
			const currentLen = data[i][coordonates[number]].length
			if (currentLen>1){
				data[i][coordonates[number]] = [number]
				let myData = deepCopy(data)
				animation.push(myData)
				makeChange = true
			}		
		}
	}
	return makeChange
}

export function loneNumberColumn(j, data, animation){
	let makeChange = false 
	let occurence = {}
	let coordonates = {}
	for (let i=1; i<10; i++){
		occurence[i] = 0
		coordonates[i] = []
	}
	for (let k = 0; k<9; k++){
		if (typeof(data[k][j]) === "object"){
			let currentList = data[k][j]
			for (let idx=0; idx<currentList.length; idx++){
				let currentNumber = currentList[idx]
				occurence[currentNumber]++
				coordonates[currentNumber] = k
			}
		}
	}
	for (let number=1; number<10; number++){
		if (occurence[number] === 1){
			const currentLen = data[coordonates[number]][j].length
			if (currentLen>1){
				data[coordonates[number]][j] = [number]
				let myData = deepCopy(data)
				animation.push(myData)
				makeChange = true 
			}
			
		}
	}
	return makeChange
}

export function loneNumberBox(k, data, animation){
	let makeChange = false 
	let occurence = {}
	let coordonates = {}
	let i = Math.floor(k/3)*3
	let j = (k%3)*3
	for (let number=1; number<10; number++){
		occurence[number] = 0
		coordonates[number] = []
	}
	for (let i1 = i; i1<i+3; i1++){
		for(let j1 = j; j1<j+3; j1++){
			if (typeof(data[i1][j1]) === "object"){
				let currentList = data[i1][j1]
				for (let idx=0; idx<currentList.length; idx++){
					let currentNumber = currentList[idx]
					occurence[currentNumber]++
					coordonates[currentNumber] = [i1, j1]
				}
			}
		}
	}
	for (let number=1; number<10; number++){
		if (occurence[number] === 1){
			let i1 = coordonates[number][0]
			let j1 = coordonates[number][1]
			const currentLen = data[i1][j1].length
			if (currentLen>1){
				data[i1][j1] = [number]
				let myData = deepCopy(data)
				animation.push(myData)
				makeChange = true 
			}
			
			
		}
	}
	return makeChange
}

