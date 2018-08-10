import React from 'react';

import './UserOutput.css';

const userOutput = (props) => {
	return (
		<div className="UserOutput">
			<p>User Output:</p>
			<p>{props.name}</p>
		</div>
	)
};

export default userOutput;