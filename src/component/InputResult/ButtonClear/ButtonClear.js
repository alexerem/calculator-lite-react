import React from 'react';
import classes from './ButtonClear.module.css';
import { ClearOutlined } from '@ant-design/icons';

const ButtonClear = props => {
	return (
		<div
			className={classes.ButtonClear}
			onClick={()=> props.clearInputResult()}
		>
			<ClearOutlined
				className={classes.buttonClHov}
				style={{
					fontSize: '22px',
					cursor: 'pointer'
				}}
			/>
		</div>
	)
}

export default ButtonClear;