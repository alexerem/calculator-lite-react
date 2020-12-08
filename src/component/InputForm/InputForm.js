import React from 'react';
import classes from './InputForm.module.css';

const InputForm = props => {

	const cls = [
		props.type,
		classes.InputForm
	]

	return (
		<div className={cls.join(' ')}>
			<form action="" name="form">
				<input type="text" name="textshow" placeholder="0" readOnly />
			</form>
		</div>
	)
}

export default InputForm;