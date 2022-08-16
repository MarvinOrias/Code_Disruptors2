import React from 'react';

import error from '../images/404.jpg';

export default function Error404(){
	return(
		<>
			<div className="error">
				<h3 className="error-h3">Page not found</h3>
				<h3 className="error-h3-2"><a href="/" className="error-a">Go back home</a></h3>
				<img src={error} alt="404" className="error-img" />
			</div>
		</>
	)
}