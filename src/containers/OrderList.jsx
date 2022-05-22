import React from 'react'
import OrderItem from "@component/OrderItem"
import "@style/ordersList.scss"

function OrderList() {
	return (

	<section className="orders-container">
		<h1 className="orders-container__title">My orders</h1>
		<div className="orders-container__content">
			<OrderItem />
			<OrderItem />
			<OrderItem />
			<OrderItem />
			<OrderItem />
		</div>
	</section>

	)
}

export default OrderList