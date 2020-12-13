import React from "react";
import classes from "./ButtonOn.module.css"
import imgButtonOn from "../../img/button-on.svg"

const ButtonOn = props => {

	return (
		<div className={classes.ButtonOn}>
			<img
				alt={'On'}
				src={imgButtonOn}
				width={'30px'}
				height={'30px'}
				onClick={() => props.calculatorOnOff()}
			/>
		</div>
	)
};

export default ButtonOn;