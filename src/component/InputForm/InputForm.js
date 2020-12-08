import React from 'react';
import classes from './InputForm.module.css';

const InputForm = props => {
	return (
		<div className={classes.InputForm}>
			<form action="" name="form">
				<input type="text" name="textshow" placeholder="0" readOnly />
			</form>
		</div>
	)
}

export default InputForm;