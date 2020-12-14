import React from 'react';

const CalcKey = props => {
	return (
		<React.Fragment>
			{ props.calckey.map((calckey, index) => {
				if (props.calculatorIsOn) {
					return (
						<div
							className={props.type}
							key={index}
							onClick={()=> props.changeinput(calckey, index)}
						>
							{calckey}
						</div>
				)} else {
					return (
						<div
							className={props.type}
							key={index}
							style={{cursor: 'default'}}
						>

						</div>
					)}
				})
			}
		</React.Fragment>
	)
}

export default CalcKey;