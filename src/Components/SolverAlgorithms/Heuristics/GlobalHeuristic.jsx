import {nakedSubset} from "./NakedSubset";
import {disjointChain} from "./DisjointChain";
import {loneNumber} from "./LoneNumber";


export function heuristicRoutine2(data, animation){
	let makeAdditionalTour = true 
	let i=0
	while (i<1) {
		if (loneNumber(data, animation)){
			makeAdditionalTour = true 
		} else {
			makeAdditionalTour = false
		}
		if (nakedSubset(data, animation)){
			makeAdditionalTour = true 
		} else {
			makeAdditionalTour = false
		}
		if (disjointChain(data, animation)){
			makeAdditionalTour = true 
		} else {
			makeAdditionalTour = false
		}
		i++
	}
	return 
}


export function heuristicRoutine(data, animation){
	let makeAdditionalTour = true 
	while (makeAdditionalTour) {
		if (loneNumber(data, animation)){
			makeAdditionalTour = true 
		} else {
			makeAdditionalTour = false
		}
		if (nakedSubset(data, animation)){
			makeAdditionalTour = true 
		} else {
			makeAdditionalTour = false
		}
		if (disjointChain(data, animation)){
			makeAdditionalTour = true 
		} else {
			makeAdditionalTour = false
		}
	}
	return 
}