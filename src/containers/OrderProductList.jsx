import React from 'react'
import OrderItem from "@component/OrderProductItem"
import "@style/orderProductList.scss"

function OrderProductList() {
	return (

	<section className="order-container">
		<h1 className="order-container__title">My order</h1>
		<div className="order-container__content">
			<div className="order-container__info">
				<p>
					<span>06.01.2022</span>
					<span>6 articles</span>
				</p>
				<p>$ 180.00</p>
			</div>
			<OrderItem />
			<OrderItem />
			<OrderItem />
			<OrderItem />
			<OrderItem />
			<OrderItem />
		</div>
	</section>

	)
}

export default OrderProductList