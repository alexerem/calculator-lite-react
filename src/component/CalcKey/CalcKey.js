import React from 'react';

const CalcKey = props => {
	return (
		<React.Fragment>
			{ props.calckey.map((calckey, index) => {
					return (
						<div className={props.type} key={index}>
							{calckey}
						</div>
					)
				})
			}
		</React.Fragment>
	)
}

export default CalcKey;