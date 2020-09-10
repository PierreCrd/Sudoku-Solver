import React,{Component} from "react";
import SubGrid from "./SubGrid"
import "./Grid.css"



export default class Grid extends Component {

	render(){
		return(
			<div className = "grid">
				<div className = "grid-container">
					<SubGrid changeMatrix = {this.props.changeMatrix} matrix ={this.props.matrix} iRange = {[0,2]} jRange = {[0,2]}/>
					<SubGrid changeMatrix = {this.props.changeMatrix} matrix ={this.props.matrix} iRange = {[0,2]} jRange = {[3,5]}/>
					<SubGrid changeMatrix = {this.props.changeMatrix} matrix ={this.props.matrix} iRange = {[0,2]} jRange = {[6,8]}/>
					<SubGrid changeMatrix = {this.props.changeMatrix} matrix ={this.props.matrix} iRange = {[3,5]} jRange = {[0,2]}/>
					<SubGrid changeMatrix = {this.props.changeMatrix} matrix ={this.props.matrix} iRange = {[3,5]} jRange = {[3,5]}/>
					<SubGrid changeMatrix = {this.props.changeMatrix} matrix ={this.props.matrix} iRange = {[3,5]} jRange = {[6,8]}/>
					<SubGrid changeMatrix = {this.props.changeMatrix} matrix ={this.props.matrix} iRange = {[6,8]} jRange = {[0,2]}/>
					<SubGrid changeMatrix = {this.props.changeMatrix} matrix ={this.props.matrix} iRange = {[6,8]} jRange = {[3,5]}/>
					<SubGrid changeMatrix = {this.props.changeMatrix} matrix ={this.props.matrix} iRange = {[6,8]} jRange = {[6,8]}/>
				</div>
			</div>
		)
	}
}


////rgba(60,110,150,1)



