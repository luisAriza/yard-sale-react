import React from 'react'
import ProductItem from "@component/OrderProductItem"
import close from "@icon/icon_close.png"

function CheckoutItem() {
	return (

	<div className="checkout__shopping-cart">
		<ProductItem />
		<img src={close} alt="Eliminar producto" className='checkout__icon-close' />
	</div>

	)
}

export default CheckoutItem