import React,{Component} from "react";
import "./Trash.css"

var initialX
var initialY
var currentX
var currentY
var myTrash 
var rect
var dragging = false


export default class Trash extends Component {


	handleDragStart = (e) => {
		initialX = e.clientX
		initialY = e.clientY 
		myTrash = document.getElementsByClassName("trashContainer")[0]
		rect = myTrash.getBoundingClientRect()
		if (rect.right - initialX > 10 || rect.bottom - initialY>10){
			dragging = true
		}
		
	}

	handleDrag = (e) => {
		let gridObject = document.getElementsByClassName("grid-container")[0]
		let grid = gridObject.getBoundingClientRect()
		if (dragging){
			currentX = e.clientX - initialX
			currentY = e.clientY - initialY
			myTrash.style.cursor = "grabbing"
			if (rect.left + currentX >= grid.right){
				myTrash.style.left = `${rect.left + currentX}px` 
				myTrash.style.top = `${rect.top + currentY}px`
			} else {
				myTrash.style.top = `${rect.top + currentY}px`
			}
		}
		
	}
	handleEndDrag = (e) => {
		dragging = false
		myTrash.style.cursor = "grab"
	}

	render(){
		return(
			<div 
				className = "trashContainer" 
				onMouseDown ={this.handleDragStart}
				onMouseMove = {this.handleDrag}
				onMouseUp = {this.handleEndDrag}>
				<div className ="dragSection">
					Cick to move! 
				</div>
				Drop numbers here
				
				
			</div>
		)
	}
}


//