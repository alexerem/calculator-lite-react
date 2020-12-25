import React, {Component} from 'react';
import classes from './CalcBody.module.css';
import InputForm from "../../component/InputForm/InputForm";
import CalcKey from "../../component/CalcKey/CalcKey";
import ButtonOn from "../../component/ButtonOn/ButtonOn";
import ButtonOff from "../../component/ButtonOff/ButtonOff";

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
			// eslint-disable-next-line no-eval
			const result = eval(input)
			this.setState({
				inputText: result
			})
			this.props.changeInputResult(input,result)
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

			const input = this.state.inputText
			const lastInputSymbol = input[input.length - 1]

			if (lastInputSymbol === '*' || lastInputSymbol === '/' ||
				lastInputSymbol === '-' || lastInputSymbol === '+') {

				if (value === '*' || value === '/' ||
					value === '-' || value === '+') {
					return
				}

			}

			const key = this.state.inputText
			this.setState({
				inputText: key + value
			})
		}
	}

	clearInputtext = () => {
		this.setState({
			inputText: ''
		})
	}

	render() {
		return (
			<div className={classes.CalcBody}>
				<InputForm
					type={classes.CalcKey}
					inputtext={this.state.inputText}
					calculatorIsOn={this.props.calculatorIsOn}
				/>
				<CalcKey
					calckey={this.state.key}
					inputtext={this.state.inputText}
					type={classes.CalcKey}
					changeinput={this.changeInput}
					calculatorIsOn={this.props.calculatorIsOn}
				/>

				{
					this.props.calculatorIsOn
					?
						<ButtonOff
							calculatorOnOff={this.props.calculatorOnOff}
							clearInputResult={this.props.clearInputResult}
							clearInputtext={this.clearInputtext}
						/>
					:
						<ButtonOn
							calculatorOnOff={this.props.calculatorOnOff}
						/>
				}

			</div>
		)
	}
	}