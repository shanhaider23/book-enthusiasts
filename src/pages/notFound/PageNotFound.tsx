import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound: React.FC = () => {
	return (
		<div style={{ textAlign: 'center', marginTop: '50px' }}>
			<h1>404 - Page Not Found</h1>
			<p>Oops! The page you are looking for does not exist.</p>
			<Link to="/home" style={{ textDecoration: 'none', color: 'blue' }}>
				Go back to Home
			</Link>
		</div>
	);
};

export default PageNotFound;