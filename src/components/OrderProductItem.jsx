import React from 'react'
import "@style/orderProductItem.scss"
import bike from "@image/pexels-photo-276517 (mobile).jpeg"

function OrderItem() {
	return (

	<div className="order-item">
		<figure className='order-item__product-image'>
			<img src={bike} alt="bike" />
		</figure>
		<p className='order-item__title'>Bike</p>
		<p className='order-item__price'>$ 30,00</p>
	</div>

	)
}

export default OrderItem