import React from 'react'
import ProductItem from "@component/CheckoutProductItem"
import "@style/checkout.scss"
import arrow from "@icon/flechita.svg"

function Checkout() {
	return (

	<aside className="checkout">
		<div className="checkout__title">
			<img src={arrow} alt="Flechita" />
			<h3>Shopping cart</h3>
		</div>
		<div className="checkout__content">
			<ProductItem />
			<ProductItem />
			<ProductItem />
		</div>
		<div className="checkout__total">
			<p>Total</p>
			<p>$ 180.00</p>
		</div>
		<button className="primary-button checkout__button">Checkout</button>
	</aside>

	)
}

export default Checkout