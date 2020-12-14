import React from 'react';
import classes from './InputForm.module.css';

const InputForm = props => {

	const cls = [
		props.type,
		classes.InputForm
	]

	return (
		<React.Fragment>
			{
				props.calculatorIsOn
			?
					<div className={cls.join(' ')} style={{cursor: 'default'}}>
						<form action="" name="form">
							<input type="text" name="textshow" placeholder="0" value={props.inputtext} readOnly />
						</form>
					</div>
			:
					<div className={cls.join(' ')} style={{cursor: 'default'}}>
						<form action="" name="form">
							<input type="text" name="textshow" value={props.inputtext} readOnly />
						</form>
					</div>
			}
		</React.Fragment>
	)
}

export default InputForm;