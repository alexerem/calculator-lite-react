import React, {Component} from 'react';
import classes from './Layout.module.css'
import 'antd/dist/antd.css';
import CalcBody from "../../containers/CalcBody/CalcBody";
import InputResult from "../../component/InputResult/InputResult";

export default class Layout extends Component {

	state = {
		inputResult: '',
		calculatorIsOn: false
	}

	changeInputResult = (input,result) => {
		const inpRes = this.state.inputResult
		this.setState({
			inputResult: inpRes + '\n' + input + ' = ' + result
		})
	}

	clearInputResult = () => {
		this.setState({
			inputResult: ''
		})
	}

	changeCalculatorIsOn= () => {
		let calculatorIsOn = this.state.calculatorIsOn
		this.setState({
			calculatorIsOn: !calculatorIsOn
		})
	}

	render() {
		return (
			<div className={classes.Layout}>
				<CalcBody
					changeInputResult={this.changeInputResult}
					calculatorIsOn={this.state.calculatorIsOn}
					calculatorOnOff={this.changeCalculatorIsOn}
				/>
				<InputResult
					inputResult={this.state.inputResult}
					clearInputResult={this.clearInputResult}
					calculatorIsOn={this.state.calculatorIsOn}
				/>
			</div>
		)
	}
}

