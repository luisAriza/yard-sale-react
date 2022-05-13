// import React from 'react';
import "@style/shoppingCart.scss";
import arrow from "@icon/flechita.svg";
import close from "@icon/icon_close.png";
import bike from "@image/pexels-photo-276517 (mobile).jpeg";

function ShoppingCar() {
	return (

	<aside className="product-detail">
		<div className="tittle">
			<img src={arrow} alt="Flechita" />
			<h1>Shopping cart</h1>
		</div>
		<div className="my-order-content">
			<div className="shopping-cart">
				<img src={bike} alt="bike" />
				<p>Bike</p>
				<p>$ 30,00</p>
				<img src={close} alt="Eliminar producto" />
			</div>
			<div className="shopping-cart">
				<img src={bike} alt="bike" />
				<p>Bike</p>
				<p>$ 30,00</p>
				<img src={close} alt="Eliminar producto" />
			</div>
			<div className="shopping-cart">
				<img src={bike} alt="bike" />
				<p>Bike</p>
				<p>$ 30,00</p>
				<img src={close} alt="Eliminar producto" />
			</div>
			<div className="shopping-cart">
				<img src={bike} alt="bike" />
				<p>Bike</p>
				<p>$ 30,00</p>
				<img src={close} alt="Eliminar producto" />
			</div>
		</div>
		<div className="total">
			<p>Total</p>
			<p>$ 180.00</p>
		</div>
		<button className="primary-button">Checkout</button>
	</aside>

	)
}

export default ShoppingCar;