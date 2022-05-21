import React from 'react'
import OrderItem from "@component/OrderItem"
import "@style/order.scss"

function Order() {
	return (

	<main className="order">
		<section className="order__container">
			<h1 className="order__title">My order</h1>
			<div className="order__content">
				<div className="order__info">
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
	</main>

	)
}

export default Order;