// import React from 'react';
// import "@style/desktopMenu.scss";

function DesktopMenu() {
	return (

	<section className="desktop-menu">
		<ul>
			<li>
				<a href="/">My orders</a>
			</li>
			<li>
				<a href="/">My account</a>
			</li>
			<li>
				<a href="/" className="sign-out">Sign out</a>
			</li>
		</ul>
	</section>

	)
}

export default DesktopMenu;