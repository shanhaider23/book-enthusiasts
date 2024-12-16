import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';
import DarkModeToggle from '../../ui/DarkModeToggle';
import Logo from '../../assets/logo.png';
const Header: React.FC = () => (
	<header className="header">
		<nav className="header__menu">
			<div>
				<NavLink to="/" className="header__logo-container">
					<img src={Logo} alt="Logo" className="header__logo" />
				</NavLink>
			</div>
			<div className="header__box">
				<NavLink
					to="/"
					className={({ isActive }) =>
						`header__link ${isActive ? 'header__link--active' : ''}`
					}
				>
					Home
				</NavLink>
				<NavLink
					to="/book"
					className={({ isActive }) =>
						`header__link ${isActive ? 'header__link--active' : ''}`
					}
				>
					Books
				</NavLink>
				<DarkModeToggle />
			</div>
		</nav>
	</header>
);

export default Header;
