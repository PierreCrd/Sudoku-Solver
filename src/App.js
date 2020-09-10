import React, {Component} from 'react';
import './App.css';
import Grid from './Components/Grid/Grid.jsx'
import DndKeyboard from './Components/DndKeyboard/DndKeyboard'
import ToolBar from './Components/ToolBar/ToolBar'
import Trash from './Components/Trash/Trash'
import {getMatrixOfValidNumbers} from "./Components/SudokuSolver"
import {deepCopy} from "./Components/SolverAlgorithms/Heuristics/GenericFunctions"



class App extends Component {


	state = {
		matrix: [
				[0,0,0,5,8,0,7,0,0],
				[0,9,7,0,0,3,0,0,1],
				[0,0,0,0,6,7,0,9,0],
				[0,0,1,0,9,0,0,0,5],
				[0,7,2,0,0,0,9,4,0],
				[8,0,0,0,4,0,1,0,0],
				[0,5,0,0,0,0,0,0,0],
				[2,0,0,0,0,0,3,8,0],
				[0,0,4,0,7,1,0,0,0]
				],
		prevMatrix: [
				[0,0,0,5,8,0,7,0,0],
				[0,9,7,0,0,3,0,0,1],
				[0,0,0,0,6,7,0,9,0],
				[0,0,1,0,9,0,0,0,5],
				[0,7,2,0,0,0,9,4,0],
				[8,0,0,0,4,0,1,0,0],
				[0,5,0,0,0,0,0,0,0],
				[2,0,0,0,0,0,3,8,0],
				[0,0,4,0,7,1,0,0,0]
				],
		validNumbers: false
	}


	changeMatrix = (i,j,number) => {
		if (this.state.validNumbers) {
			let myMatrix = this.state.matrix
			myMatrix[i][j] = number
			
				console.log(myMatrix)
				this.setState({
				matrix: getMatrixOfValidNumbers(myMatrix)
				})
		} else {
			let myMatrix = this.state.matrix
			myMatrix[i][j] = number
			this.setState({
				matrix: myMatrix
			})
		}
	}


	setValidNumbers = () => {
		if (this.state.validNumbers) {
			let myMatrix = this.state.matrix
			for (let i=0; i<9; i++){
				for (let j=0; j<9; j++){
					if (myMatrix[i][j]>0 && typeof(myMatrix[i][j])==="number"){
						myMatrix[i][j] = myMatrix[i][j]
					} else {
						myMatrix[i][j] = 0
					}
				}
			}
			this.setState({
				matrix: myMatrix,
				validNumbers: false
			})
		} else {
			let myMatrix = this.state.matrix
			myMatrix = getMatrixOfValidNumbers(myMatrix)
			this.setState({
				matrix: myMatrix,
				validNumbers: true
			})
		}
	}

	setPrevMatrix = (myMatrix) => {
		this.setState({
			prevMatrix: myMatrix
		})
	}

	setMatrix = (myMatrix) => {
		this.setState({
			matrix: myMatrix
		})
	}

	render(){
		return (
	    <section className="App">
	    	<ToolBar setPrevMatrix = {this.setPrevMatrix} setValidNumbers = {this.setValidNumbers} setMatrix = {this.setMatrix} data = {this.state}/>
	    	<Trash/>
			<Grid matrix = {this.state.matrix} changeMatrix = {this.changeMatrix}/>
			<DndKeyboard  changeMatrix = {this.changeMatrix} matrix = {this.state.matrix}/>
		    </section>
	  );
	}
}

export default App;
