import React from 'react';
import { Input } from 'antd';
import classes from './InputResult.module.css';

const { TextArea } = Input;

const InputResult = (props) => {

	const inputResult = props.inputResult
	// const modificationOne = inputResult.replaceAll('+', ' + ')
	// const modificationTwo = modificationOne.replaceAll('-', ' - ')
	// const modificationTree = modificationTwo.replaceAll('*', ' * ')
	// const modificationFour = modificationTree.replaceAll('/', ' / ')

	return (
		<div className={classes.InputResult}>
			<TextArea
				rows={18}
				cols={40}
				value={inputResult}
				className={classes.TextArea}
			/>
		</div>
	)
}

export default InputResult;