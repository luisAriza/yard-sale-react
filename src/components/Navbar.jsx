import React, { useState, useContext } from 'react'
import Menu from "@container/Menu"
import AppContext from "@context/appContext"
import Checkout from "@container/Checkout"
import "@style/navbar.scss"
import menu from "@icon/icon_menu.svg"
import logo from "@logo/logo_yard_sale.svg"
import shoppingCar from "@icon/icon_shopping_cart.svg"

function Navbar() {
	const [toggle, setToggle] = useState(false);
	const [toggleCheckout, setToggleCheckout] = useState(false);
	const { state } = useContext(AppContext);

	const handleToggle = () => {
		setToggle(!toggle);
	}
	const handleToggleCheckout = () => {
		setToggleCheckout(!toggleCheckout);
	}

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
				<li className="navbar__email" onClick={handleToggle}>
					lmanuel159@hotmail.com
					{/* <a href="/login">Sign in</a> */}
				</li>
				<li className="navbar__shopping-cart" onClick={handleToggleCheckout}>
					<img src={shoppingCar} alt="Shopping cart" />
					{state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
				</li>
			</ul>
			</div>
			{toggle && <Menu />}
			{toggleCheckout && <Checkout />}
	</nav>

	)
}

export default Navbar;