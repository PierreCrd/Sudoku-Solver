import React,{Component} from "react"
import {Button} from "react-bootstrap"
import {ButtonGroup} from "react-bootstrap"
import {sudokuSolver, isValid} from "../SudokuSolver"
import greedySudokuSolver from "../SolverAlgorithms/GreedyBacktrack"
import {deepCopy} from "../SolverAlgorithms/Heuristics/GenericFunctions"
import {createBoard} from "../GridGenerator"
import DropdownButton from "../DropDown/Dropdown"
import "./ToolBar.css"


export default class ToolBar extends Component {

	state = {
		matrices: "",
		animation: "my-red-animation",
		solver : sudokuSolver,
		label: 1,
		showHelp: false, 
		solved: false,
	} 

	actionAnimation = (Animation, animationSpeed, firstDelay, degressive) => {
		setTimeout(() => {
			for (let i=0; i<Animation.length; i++){
				setTimeout(()=>{
					this.props.setMatrix(Animation[i])
				},(i)*animationSpeed + degressive*i**2)
			}
		}, firstDelay)
	}

	setSolver = (myFunction, newAnimation, newLabel) => {
		this.setState({
			solver: myFunction,
			animation: newAnimation,
			label: newLabel,
			solveButtonMsg: "solve",
		})
	}

	solveTheGrid = () => {
		let Animation = []
		let delay = 0
		if (this.state.solved){
			this.props.setMatrix(deepCopy(this.props.data.prevMatrix))
			this.setState({
				solved: false
			})
		} else {
			this.setState({
				solved: true		
			})
			if (this.state.label === 2 && this.props.data.validNumbers === false ){
				this.printValidNumbers()
				delay = 1250
			} else if (this.state.label < 2 && this.props.data.validNumbers === true ){
				this.printValidNumbers()
				delay = 1250
			}
			setTimeout(() => {
				this.state.solver(this.props.data.matrix, Animation)
				this.actionAnimation(Animation, 70, 300,0)
			}, delay)
		}
		
	}


	generateNewGrid = () => {
		let myAnimation = createBoard(this.state.matrices)
		let newMatrix = myAnimation[myAnimation.length-1]
		this.props.setPrevMatrix(deepCopy(newMatrix))
		this.setState({
			solved: false 
		})
		if (this.props.data.validNumbers){
			setTimeout(()=>{
				this.actionAnimation(myAnimation, 30,300,1)
			},600)
			this.printValidNumbers()
			
		} else {
			this.actionAnimation(myAnimation, 30,300,1)
		}
		
	}

	componentDidMount(){
		setTimeout(()=>{
			fetch('data.txt')
			.then(function(response){
				return response.text()
			})
			.then((data) => {
				this.setState({
					matrices: data
				})
			})
		}, 2000)
		
	}

	printValidNumbers = () => {
		let preGrid = document.getElementsByClassName("grid")[0]
		let grid = document.getElementsByClassName("grid-container")[0]
		let subGrids = document.querySelectorAll(".grid-item,.filled-grid-item")
		this.setState({
				showHelp: !this.state.showHelp
			})
		if (this.props.data.validNumbers){
			grid.style.border = "0.3vh solid rgba(60,110,150,0.8)"
			for (let i=0; i<subGrids.length; i++){
				let subGrid = subGrids[i]
				setTimeout(()=>{
					subGrid.style.border = "0.1vh solid rgba(60,110,150,1)"
					subGrid.style.width = "6.5vh"
					subGrid.style.height = "6.5vh"
				}, i*15)	
			} 

			this.props.setValidNumbers()
			this.props.setPrevMatrix(deepCopy(this.props.data.matrix))
		} else {
			grid.style.border = "0.45vh solid rgba(60,110,150,0.8)"
			for (let i=0; i<subGrids.length; i++){
				let subGrid = subGrids[i]
				setTimeout(()=>{
					subGrid.style.border = "0.1vh solid rgba(60,110,150,1)"
					subGrid.style.width = "8.4vh"
					subGrid.style.height = "8.4vh"
				}, i*15)	
			} 
			this.props.setValidNumbers()
			this.props.setPrevMatrix(deepCopy(this.props.data.matrix))
		}
	}

	render(){
		const helpInfo = this.state.showHelp? ("Hide Help") : ("Show Help")
		const solveInfo = this.state.solved? ("Empty the grid") : ("Solve")
		const myAnimation = this.state.solved? ("my-blue-animation") : (this.state.animation) 
		return (
			<div>
				<div className = "bar">
					Sudoku Solver
				</div>
				<div className = "secondPartBar">
					<DropdownButton setSolver = {this.setSolver}> Algorithms </DropdownButton>
					<div 
						className = "buttonStyle"   
						onClick = {this.generateNewGrid}> 
						Change grid 
					</div>
					<div  
						className = "buttonStyle" 
						onClick = {this.printValidNumbers}> 
						{helpInfo}
					</div>
					<div 
						className = "solve-button" 
						onClick = {this.solveTheGrid} 
						style = {{
							borderRadius: "0vw 0.6vw 0.6vw 0vw",
							fontSize: "1.7vh" ,
							animationName: myAnimation}}> 
						{solveInfo}
					</div>
				</div>
			</div>
		)
	}
}


//