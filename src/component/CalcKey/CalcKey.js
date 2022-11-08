import React from 'react';

const CalcKey = props => {

	return (
		<React.Fragment>
			{ props.calckey.map((calckey, index) => {
				if (props.calculatorIsOn) {
					if (props.click[0] === false || props.click[1] !== index) {
						return (
							<div
								className={props.type}
								key={index}
								onClick={()=> props.changeinput(calckey, index)}
							>
								{calckey}
							</div>
						)
					} else {
						return (
							<div
								className={props.type}
								key={index}
								style={{border: '0'}}
								onClick={()=> props.changeinput(calckey, index)}
							>
								{calckey}
							</div>
						)
					}
				} else {
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