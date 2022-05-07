// import React from 'react';
import "@style/navbar.scss";
import menu from "@icon/icon_menu.svg";
import logo from "@logo/logo_yard_sale.svg";
import shoppingCar from "@icon/icon_shopping_cart.svg";

const Header = () => {
	return (

	<nav className="navbar">
		<img src={menu} alt="menu" className="menu" />
		<div className="navbar-left">
			<img src={logo} alt="logo" className="logo" />
			<ul>
				<li>
					<a href="/">All</a>
				</li>
				<li>
					<a href="/">Clothes</a>
				</li>
				<li>
					<a href="/">Electronics</a>
				</li>
				<li>
					<a href="/">Furniture</a>
				</li>
				<li>
					<a href="/">Toys</a>
				</li>
				<li>
					<a href="/">Others</a>
				</li>
			</ul>
		</div>
		<div className="navbar-right">
			<ul>
				<li className="navbar-email">camilo.perez@hotmail.com</li>
				<li className="navbar-shopping-cart">
					<img src={shoppingCar} alt="Shopping cart" />
				</li>
			</ul>
		</div>
	</nav>

	)
};

export default Header;