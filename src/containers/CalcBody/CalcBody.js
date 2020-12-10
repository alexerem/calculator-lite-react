import React, {Component} from 'react';
import classes from './CalcBody.module.css';
import InputForm from "../../component/InputForm/InputForm";
import CalcKey from "../../component/CalcKey/CalcKey";

export default class CalcBody extends Component {

	state = {
		key: ["C", "(", ")", <span>&larr;</span>, "7", "8", "9", <span>&divide;</span>,
			"4", "5", "6", <span>&times;</span>, "1", "2", "3", "-", "0", ".", "=", "+"],
		inputText: ''
	}

	changeInput = (value, index) => {

		if (index === 0) {
			this.setState({
				inputText: ''
			})
		} else if (index === 18) {
			const input = this.state.inputText
			this.setState({
				// eslint-disable-next-line no-eval
				inputText: eval(input)
			})
		} else if (index === 3) {
			let str = this.state.inputText
			let lengthStr = this.state.inputText.length
			this.setState({
				inputText: str.slice(0, lengthStr - 1)
			})
		} else {

			if (index === 7) {
				value = '/'
			} else if (index === 11) {
				value = '*'
			}

			const key = this.state.inputText
			this.setState({
				inputText: key + value
			})
		}
	}

	render() {
		return (
			<div className={classes.CalcBody}>
				<InputForm
					type={classes.CalcKey}
					inputtext={this.state.inputText}
				/>
				<CalcKey
					calckey={this.state.key}
					inputtext={this.state.inputText}
					type={classes.CalcKey}
					changeinput={this.changeInput}
				/>
			</div>
		)
	}
}