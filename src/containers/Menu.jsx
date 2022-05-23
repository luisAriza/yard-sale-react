import React from 'react'
import "@style/menu.scss"
import close from "@icon/icon_close.png"

function Menu() {
	return (

	<section className="menu">
		<img src={close} alt="icon de close" className='menu__icon-close' />
		<ul>
			<li>
				<a href="/">CATEGORIES</a>
			</li>
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
				<a href="/">Furnitures</a>
			</li>
			<li>
				<a href="/">Toys</a>
			</li>
			<li>
				<a href="/">Others</a>
			</li>
		</ul>
		<ul>
			<li>
				<a href="/orders">My orders</a>
			</li>
			<li>
				<a href="/account">My account</a>
			</li>
		</ul>
		<a href="/login" className="menu__login">Log in</a>
	</section>

	)
}

export default Menu;