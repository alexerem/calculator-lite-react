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
		inputText: '',
		errorEval: false,
		click: [false, null]
	}

	changeInput = (value, index) => {

		if (index === 0) {

			this.setState({
				inputText: '',
				errorEval: false
			})

		} else if (index === 18) {

			try {
				const input = this.state.inputText
				// eslint-disable-next-line no-eval
				const result = eval(input)
				this.setState({
					inputText: result
				})
				// eslint-disable-next-line eqeqeq
				if (input != result) {
					this.props.changeInputResult(input,result)
				}
			} catch (error) {
				this.setState({
					inputText: 'Недопустимое выражение',
					errorEval: true
				})
			}

		} else if (index === 3) {

			if (this.state.errorEval === true) {
				this.setState({
					inputText: '',
					errorEval: false
				})
			} else {
				let str = this.state.inputText
				let strModif = str.toString()
				let newStr = strModif.slice(0, -1)
				this.setState({
					inputText: newStr
				})
			}

		} else {

			if (index === 7) {
				value = '/'
			} else if (index === 11) {
				value = '*'
			}

			const input = this.state.inputText
			const lastInputSymbol = input[input.length - 1]

			if (lastInputSymbol === '*' || lastInputSymbol === '/' ||
				lastInputSymbol === '-' || lastInputSymbol === '+' ||
				lastInputSymbol === '.' || lastInputSymbol === 'е') {

				if (value === '*' || value === '/' ||
					value === '-' || value === '+' ||
					value === '.' || lastInputSymbol === 'е') {

					return
				}
			}

			const key = this.state.inputText
			this.setState({
				inputText: key + value
			})
		}

		this.setState({
			click: [true, index]
		})

		setTimeout(() => this.setState({click: [false, null]}), 200)

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
					errorEval={this.state.errorEval}
				/>
				<CalcKey
					type={classes.CalcKey}
					click={this.state.click}
					calckey={this.state.key}
					inputtext={this.state.inputText}
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