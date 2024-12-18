import React from 'react';
import './footer.scss';

const Footer: React.FC = () => {
	return (
		<footer className="footer">
			<p className="footer__text">
				&copy; {new Date().getFullYear()} | Designed and Developed by:
				<a
					className="footer__link"
					href="https://www.shanehaider.dk"
					target="_blank"
					rel="noopener noreferrer"
				>
					Shan-e-Haider Bukhari
				</a>
			</p>
		</footer>
	);
};

export default Footer;
