import React from 'react';
import classes from './InputForm.module.css';

const InputForm = props => {

	const cls = [
		props.type,
		classes.InputForm
	]

	let fontSize = null;

	if (props.errorEval) {
		fontSize = {fontSize: '14px'}
	} else {
		fontSize = {fontSize: '24px'}
	}

	return (

		<React.Fragment>

			{
				props.calculatorIsOn
			?
					<div className={cls.join(' ')} style={{cursor: 'default', border: '0'}}>
						<form action="" name="form">
							<input type="text" name="textshow" placeholder="0" value={props.inputtext}
								   style={fontSize} />
					</form>
					</div>
			:
					<div className={cls.join(' ')} style={{cursor: 'default', border: '0'}}>
						<form action="" name="form">
							<input type="text" name="textshow" value={props.inputtext} readOnly />
						</form>
					</div>
			}

		</React.Fragment>
	)
}

export default InputForm;