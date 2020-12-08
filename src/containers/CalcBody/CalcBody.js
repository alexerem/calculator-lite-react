import React, {Component} from 'react';
import classes from './CalcBody.module.css';
import InputForm from "../../component/InputForm/InputForm";
import CalcKey from "../../component/CalcKey/CalcKey";

export default class CalcBody extends Component {

	state = {
		key: ["C", "(", ")", <span>&larr;</span>, 7, 8, 9, <span>&divide;</span>, 4, 5,
			6, <span>&times;</span>, 1, 2, 3, "-", 0, ".", "=", "+"]
	}

	render() {
		return (
			<div className={classes.CalcBody}>
				<InputForm type={classes.CalcKey} />
				<CalcKey calckey={this.state.key} type={classes.CalcKey} />
			</div>
		)
	}
}