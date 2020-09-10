import {heuristicRoutine} from "./Heuristics/GlobalHeuristic"
import {isValid, deepCopy, updateGridAfterFill} from "./Heuristics/GenericFunctions"


export function heuristicBacktrack(data, animation){

	// 0) execute the heuristics until they don'change anything in data
	heuristicRoutine(data, animation)

	// 1) identify the best cell to start with 
	let minLength = 10
	let bestCell = []
	for (let i = 0; i < 9; i++){
		for (let j=0; j < 9; j++){
			if (typeof(data[i][j]) === "object"){
				if (data[i][j].length < minLength){
					minLength = data[i][j].length
					bestCell = [i,j]
				}
			}
		}
	}

	// 2) Base-case: if minLength is still 10, there is no cell to fill -> return true 
	if (minLength === 10){
		return true
	}
	// 3) start to backtrack on bestCell
	let i = bestCell[0]
	let j = bestCell[1]
	let currentNumbersToTest = data[i][j]
	for (let k = 0; k < currentNumbersToTest.length; k++){
		let currentNumber = currentNumbersToTest[k]
		let newData = deepCopy(data)
		newData[i][j] = currentNumber
		animation.push(newData)
		let newData2 = deepCopy(newData)
		updateGridAfterFill(i, j, currentNumber, newData2, animation)
		if (heuristicBacktrack(newData2, animation)){
			return true 
		}  else {
			let newData3 = deepCopy(newData)
			animation.push(newData3)
			let newData4 = deepCopy(data)
			animation.push(newData4)
		}
		
	}

	// 4) if you come here, no can be placed in best cell so the grid is not correct -> return false!
	return false

	// 	 Note: What's append when the grid is incorrect? 
	// If two cases are in conflict, after some time, one of them will have an empty list as the possible numbers when 0) is executed. 
	// Then this will be identifyed as bestCell by 1)
	// Then, 3) will try to iterate on an empty object -> nothing happen 
	// Thus, the algo come in 5) and return false
}




