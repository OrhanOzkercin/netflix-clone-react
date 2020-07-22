import React, { useState, useEffect } from 'react';

import './Navbar.css';

const Navbar = () => {
	const [show, handleShow] = useState(false);
	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 100) {
				handleShow(true);
			} else handleShow(false);
		});
		return () => {
			window.removeEventListener('scroll');
		};
	}, []);

	return (
		<nav className={`nav ${show && 'nav__black'}`}>
			<ul className='nav__list'>
				<li>
					<img
						src='https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg'
						alt='Netflix-Logo'
						className='nav__logo'
					/>
				</li>
				<li>
					<img
						src='https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png'
						alt='Netlix-User'
						className='nav__user'
					/>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
