import React, {Component} from "react"
import "./DndKeyboard.css"
import {isValid} from "../SudokuSolver.jsx"


const NUMBER_LIST = [1,2,3,4,5,6,7,8,9]
let CURRENT_NUMBER = 0
let LAST_DRAG_POSITION = [-1,-1]
let MODIFY_MATRIX = false
let ON_TRASH_CONTAINER = false


export default class DndKeyboard extends Component {

	setGrid = (event) => {
		if ( event.target.className === "grid-item" || event.target.className === "uncertain-number") {

			
			MODIFY_MATRIX = true
			ON_TRASH_CONTAINER = false
			if ( event.target.className === "grid-item"){
				LAST_DRAG_POSITION = [Number(event.target.id[0]),Number(event.target.id[2])]
				event.target.style.backgroundColor = "rgba(150,230,250)";
				event.target.style.border = "1vh solid rgba(60,110,150,1)"
				event.target.style.color = "rgba(150,230,250)";
			}
		} else if (event.target.className === "trashContainer"){
			ON_TRASH_CONTAINER = true
			MODIFY_MATRIX = false
		} else {
		MODIFY_MATRIX = false
		ON_TRASH_CONTAINER = false

		}
	}

	setGridToNormal = (event) => {
			if ( event.target.className === "grid-item") {
				event.target.style.backgroundColor = "rgba(200,245,255,1)";
				event.target.style.border = "0.08vh solid rgba(60,110,150,1)";
				event.target.style.color = "lightpink";
		  } 
		}

	handleDrag = (event) => {
		document.addEventListener("dragenter", this.setGrid);
		document.addEventListener("dragleave", this.setGridToNormal);
	}

	handleDragEnd = (event) => {
		document.removeEventListener("dragenter", this.setGrid);
		document.removeEventListener("dragleave", this.setGridToNormal);
		if (MODIFY_MATRIX){
			let i = LAST_DRAG_POSITION[0]
			let j = LAST_DRAG_POSITION[1]
			
			if (isValid(this.props.matrix,i,j,CURRENT_NUMBER)) {
				this.props.changeMatrix(i,j,CURRENT_NUMBER)
			}
		} else if (ON_TRASH_CONTAINER) {
			alert("Nice try! But you cannot remove the keyBoard! ;)")
		}
	}

	changeNumber = (number) => {
		CURRENT_NUMBER = number
	}
	
	render(){
		return(
			<footer className = "DndStyle">
					{ NUMBER_LIST.map( (number) => 
						<div 
							className = "Key" 
							draggable = {true} 
							key = {number} 
							onDragStart = {this.handleDrag}
							onDragEnd = {this.handleDragEnd}
							onMouseOver = {() => this.changeNumber(number)}> {number} 
						</div> ) }
			</footer>
		)
	}
}
