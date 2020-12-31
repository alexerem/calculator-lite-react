import React from 'react';
import { Input } from 'antd';
import classes from './InputResult.module.css';
import ButtonClear from "./ButtonClear/ButtonClear";

const { TextArea } = Input;

const InputResult = (props) => {

	const inputResult = props.inputResult



	return (
		<React.Fragment>
			{
				props.calculatorIsOn
			?
				<div className={classes.InputResult}>
					<TextArea
						rows={18}
						cols={40}
						value={inputResult}
						className={classes.TextArea}
					/>
					<ButtonClear
						clearInputResult={props.clearInputResult}
					/>
				</div>
			:
				null
			}
		</React.Fragment>
	)
}

export default InputResult;