import React,{Component} from "react";
import "./DropdownButton.css"
import {sudokuSolver} from "../SudokuSolver"
import greedySudokuSolver from "../SolverAlgorithms/GreedyBacktrack"
import {heuristicBacktrack, heuristicBacktrack2} from "../SolverAlgorithms/HeuristicBacktrack"


const SUCCESS_COLOR = "rgba(105,225,185,1)"
const MEAN_COLOR = "rgb(255,165,40,1)"
const DANGER_COLOR = "rgba(245,100,140,1)"

class DropdownButton extends Component{

	useClassicBacktrack =() => {
		this.props.setSolver(sudokuSolver, "my-red-animation", 0)
	}

	useGreedyBacktrack = () => {
		this.props.setSolver(greedySudokuSolver, "my-orange-animation", 1)
	}

	useTwoStageAlgo = () => {
		this.props.setSolver(heuristicBacktrack, "my-green-animation", 2)
	}

	render(){
		return(
			<div>
				<div  className = "dropdown">
					<div className = "projects">
						<button className = "dropdown-style"> 
							{this.props.children} 
							<img 
								src = "/dropdown-icon.jpg" 
								height = "15px" 
								width = "15px"
								/> 
						</button>
						<ul >
							<li>
								<div className = "danger-button" onMouseOver = {this.useClassicBacktrack}> Backtracking </div> 
							</li>
							<li>
								<div className = "mean-button" onMouseOver = {this.useGreedyBacktrack}> Greedy Backtrack </div> 
							</li>
							<li> 
								<div className = "success-button" onMouseOver = {this.useTwoStageAlgo}> Heuristic + Backtrack  </div> 
							</li>
						</ul>
					</div>
				</div>
				
			</div>
		)
	}
} 

export default DropdownButton