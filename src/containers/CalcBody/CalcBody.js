import React, {Component} from 'react';
import classes from './CalcBody.module.css';
import InputForm from "../../component/InputForm/InputForm";

export default class CalcBody extends Component {
	render() {
		return (
			<div className={classes.CalcBody}>
				<InputForm />
			</div>
		)
	}
}