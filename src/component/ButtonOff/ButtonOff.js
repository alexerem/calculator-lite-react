import React from "react";
import classes from "./ButtonOff.module.css"
import imgButtonOff from "../../img/button-off.svg"

const ButtonOff = props => {

	return (
		<div className={classes.ButtonOff}>
			<img
				alt={'Off'}
				src={imgButtonOff}
				width={'22px'}
				height={'22px'}
				onClick={() => {
					props.calculatorOnOff();
					props.clearInputResult();
					props.clearInputtext();
				}}
			/>
		</div>
	)
};

export default ButtonOff;