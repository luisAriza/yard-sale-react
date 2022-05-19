// import React from 'react';
// import "@style/productDetails.scss";
import close from "@icon/icon_close.png";
import addCart from "@icon/bt_add_to_cart.svg";
import bike from "@image/pexels-photo-276517 (mobile).jpeg";

function ProductDetails() {
	return (

	<aside className="product-detail">
		<div className="product-detail-close">
			<img src={close} alt="Close" />
		</div>
		<img src={bike} alt="Bike" />
		{/* Pedazo de código copiado */}
		<div className="points">
			<li className="active" />
			<li />
			<li />
		</div>
		{/* Fin de pedazo de código copiado */}
		<div className="product-info">
			<p>$ 30,00</p>
			<p>Bike</p>
			<p>With its functional and practical, this bike also fullstick a decorative function, adding personality and a retro-vintage aesthetic to your garage or workspace.</p>
			<button className="primary-button">
				<img src={addCart} alt="Add to cart" />
				Add to cart
			</button>
		</div>
	</aside>

	)
}

export default ProductDetails;