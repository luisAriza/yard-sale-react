// import React from 'react';
import "@style/navbar.scss";
import menu from "@icon/icon_menu.svg";
import logo from "@logo/logo_yard_sale.svg";
import shoppingCar from "@icon/icon_shopping_cart.svg";

const Navbar = () => {
	return (

	<nav className="navbar">
		<img src={menu} alt="icono de hamburguesa del menu" className="navbar__burger" />
		<div className="navbar__left">
			<a href="/" className="navbar__logo">
				<img src={logo} alt="logo" />
			</a>
			<ul>
				<li><a href="#">All</a></li>
				<li>
					<a href="#">Clothes</a>
				</li>
				<li>
					<a href="#">Electronics</a>
				</li>
				<li>
					<a href="#">Furniture</a>
				</li>
				<li>
					<a href="#">Toys</a>
				</li>
				<li>
					<a href="#">Others</a>
				</li>
			</ul>
		</div>
		<div className="navbar__right">
			<ul>
				<li className="navbar__email">
					<a href="#">Sign in</a>
				</li>
				<li className="navbar__shopping-cart">
					<img src={shoppingCar} alt="Shopping cart" />
				</li>
			</ul>
		</div>
	</nav>

	)
};

export default Navbar;