import React,{Component} from "react";
import "./SubGrid.css"


var iModify
var jModify
var modifyMatrix
export default class SubGrid extends Component {

	state = {
		iModify: -1,
		jModify: -1,
		modifyMatrix: true
	}

	setTrash = (event) => {
		if (event.target.className === "trashContainer" || event.target.id === "TrashText") {
			console.log(event.target.id)
			modifyMatrix = true
			var myTrash = document.getElementsByClassName("trashContainer")[0]
			myTrash.style.border = "solid 8px rgba(170,100,105,0.9)"
			myTrash.style.backgroundColor = "rgba(255,205,215,1)"
			var myDrag = document.getElementsByClassName("dragSection")[0]
			myTrash.style.color = "rgba(170,100,105,0.9)"
			myDrag.style.color = "rgba(170,100,105,0.9)"
		} else {
			modifyMatrix = false 
		}
	}

	setTrashToNormal = (event) => {
			if (event.target.className === "trashContainer" || event.target.id === "TrashText") {
				var myTrash = document.getElementsByClassName("trashContainer")[0]
				var myDrag = document.getElementsByClassName("dragSection")[0]
				myTrash.style.border = "solid 3px rgba(105,225,185,1)"
				myTrash.style.backgroundColor = "rgba(205,255,215,0.7)"
				myTrash.style.color = "rgba(120,200,125)"
				myDrag.style.color = "rgba(120,200,125)"
			} 
		}

	handleDragStart = (e) => {
		iModify= e.target.id[0]
		jModify= e.target.id[2]
		var myTrash = document.getElementsByClassName("trashContainer")[0]
		var myDrag = document.getElementsByClassName("dragSection")[0]
		myTrash.style.transitionDuration = '0.2s'
		myTrash.style.fontSize = "2vw"
		myTrash.style.fontWeight = "bold"
		myDrag.style.fontSize = "1vw"
		myDrag.style.fontWeight = "normal"
	}

	handleDrag = () => {
		document.addEventListener("dragenter", this.setTrash)
		document.addEventListener("dragleave", this.setTrashToNormal)

	}

	handleDragEnd = () => {
		document.removeEventListener("dragenter", this.setTrash)
		var myTrash = document.getElementsByClassName("trashContainer")[0]
		myTrash.style.fontSize = "1vw"
		myTrash.style.fontWeight = "normal"
		setTimeout(()=>{
			myTrash.style.transitionDuration = null
		},500)
		if (modifyMatrix) {
			this.props.changeMatrix(iModify, jModify, 0)
		}
	}

	render(){
		const toPrint = []
		const iMin = this.props.iRange[0]
		const iMax = this.props.iRange[1]
		const jMin = this.props.jRange[0]
		const jMax = this.props.jRange[1]
		const filledStyle = {
						 		gridTemplateColumns: "5vh", 
						 		gridTemplateRows: "5vh",
						 		marginLeft: "1.9vh",
						 		marginTop: "0.6vh",
						 		fontSize:"4.5vh"
						}
		for (let i = iMin; i<iMax+1; i++){
			for (let j = jMin; j<jMax+1; j++){
				var currentCell = this.props.matrix[i][j]
				if (currentCell > 0 && typeof(currentCell) === "number"){
					let newElement = <div 
						key = {i*10+j} 
						className = "filled-grid-item" 
						id = {[i,j]}
						draggable = {"true"}
						onDragStart = {this.handleDragStart}
						onDrag = {this.handleDrag}
						onDragEnd = {this.handleDragEnd}
						>
						<h1 
						 	className = "certain-number" 
						 	style = {filledStyle}> 
						 	{this.props.matrix[i][j]} 
						</h1>
					</div>
					toPrint.push(newElement)
				} else if (currentCell === 0 && typeof(currentCell) === "number"){
					let newElement = <div 
						key = {i*10+j} 
						className = "grid-item" 
						id = {[i,j]}
						draggable = {"true"}
						onDragStart = {this.handleDragStart}
						onDrag = {this.handleDrag}
						onDragEnd = {this.handleDragEnd} 
						>
						
					</div>
					toPrint.push(newElement)
				} else {
					let newElement = 
						<div 
							key = {i*10+j} 
							className = "grid-item" 
							id = {[i,j]}
							draggable = {"false"}>
							{currentCell.map( (number, index) => <h1 key = {100*i+10*j+index} className = "uncertain-number" > {number} </h1>)}
						</div>
					toPrint.push(newElement)
				}
				
			}
		}
		return(
			<div className = "grid-container">
				{toPrint}
			</div>
		)
	}
}