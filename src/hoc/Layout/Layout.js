import React, {Component} from 'react';
import classes from './Layout.module.css'
import CalcBody from "../../containers/CalcBody/CalcBody";

export default class Layout extends Component {
	render() {
		return (
			<div className={classes.Layout}>

				<CalcBody />

			</div>
		)
	}
}

