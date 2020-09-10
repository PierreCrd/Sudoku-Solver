import {myDeleteFunction, isSubset, removeNumber, removeCouple, deepCopy} from "./GenericFunctions"


export function disjointChain(data, animation){
	let makeChange = false 
	for (let i=0; i<9; i++){
		if (disjointChainRow(i, data, animation)){
			makeChange = true 
		} 
		if (disjointChainColumn(i, data, animation)){
			makeChange = true 
		}
		if (disjointChainBox(i, data, animation)){
			makeChange = true
		}
	}
	return makeChange
}

export function disjointChainRow(i, data, animation){
	let makeChange = false
	for(let j=0; j<9; j++){
		let indices = []
		for (let i =0; i<9; i++){
			if (j!= i) {
				indices.push(i)
			}
		}
		if (typeof(data[i][j])==="object") {
			let L1 = data[i][j]
			let objective = L1.length-1
			for (let j2 = 0; j2<9; j2++){
				if (j2!=j && typeof(data[i][j2])==="object"){
					let L2 = data[i][j2]
					if (isSubset(L1,L2)){
						objective--
						removeNumber(indices, j2)
					}
				}
			}
			if (objective === 0) {
				for (let k = 0; k<indices.length; k++){
					let idx = indices[k]			
					if (myDeleteFunction(data[i][idx], L1)){
						let myData = deepCopy(data)
						animation.push(myData)
						makeChange = true
					}
					
				}
			}
		}
	}
	return makeChange
}


export function disjointChainColumn(j, data, animation){
	let makeChange = false
	for(let i=0; i<9; i++){
		let indices = []
		for (let j =0; j<9; j++){
			if (i!= j) {
				indices.push(j)
			}
		}
		if (typeof(data[i][j])==="object") {
			let L1 = data[i][j]
			let objective = L1.length-1
			for (let i2 = 0; i2<9; i2++){
				if (i2!=i && typeof(data[i2][j])==="object"){
					let L2 = data[i2][j]
					if (isSubset(L1,L2)){
						objective--
						removeNumber(indices, i2)
					}
				}
			}
				
			if (objective === 0) {
				for (let k = 0; k<indices.length; k++){
					let idx = indices[k]			
					if (myDeleteFunction(data[idx][j], L1)){
						let myData = deepCopy(data)
						animation.push(myData)
						makeChange = true
					}
				}
			}
		}
	}
	return makeChange
}


export function disjointChainBox(k, data, animation){
	let makeChange = false
	let i = Math.floor(k/3)*3
	let j = (k%3)*3
	for(let i1=i; i1<i+3; i1++){
		for (let j1 = j; j1<j+3; j1++){
			let indices = []
			for(let i2=i; i2<i+3; i2++){
				for (let j2 = j; j2<j+3; j2++){
					indices.push([i2,j2])
				}
			}
			if (typeof(data[i1][j1]) === "object"){
				let L1 = data[i1][j1]
				let objective = L1.length 
				for(let i2=i; i2<i+3; i2++){
					for (let j2 = j; j2<j+3; j2++){
						if (typeof(data[i2][j2]) === "object"){
							let L2 = data[i2][j2]
							if (isSubset(L1, L2)){
								objective--
								removeCouple(indices, [i2, j2])
							}
						}
					}
				}
				if (objective === 0) {
					for (let l = 0; l<indices.length; l++){
						let i2 = indices[l][0]
						let j2 = indices[l][1]
						if (myDeleteFunction(data[i2][j2], L1)){
							let myData = deepCopy(data)
							animation.push(myData)
							makeChange = true
						}
					}
				}
			}
		}
	}
	return makeChange
}




