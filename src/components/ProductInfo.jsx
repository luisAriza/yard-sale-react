import React from 'react'
import "@style/productInfo.scss"
import close from "@icon/icon_close.png"
import addCart from "@icon/bt_add_to_cart.svg"
import bike from "@image/pexels-photo-276517 (mobile).jpeg"

function ProductInfo() {
	return (

	<>
		<figure className="product-info__close-icon">
			<img src={close} alt="Close" />
		</figure>
		<figure className='product-info__image'>
			<img src={bike} alt="Bike" />
		</figure>
		<div className="product-info__points">
			<li />
			<li />
			<li />
		</div>
		<div className="product-info__detail">
			<p className='product-info__price'>$ 30,00</p>
			<p className='product-info__title'>Bike</p>
			<p className='product-info__description'>With its functional and practical, this bike also fullstick a decorative function, adding personality and a retro-vintage aesthetic to your garage or workspace.</p>
			<button className="primary-button product-info__button">
				<img src={addCart} alt="Add to cart" />
				Add to cart
			</button>
		</div>
	</>

	)
}

export default ProductInfo