// import React from 'react';
// import "@style/order.scss";
import bike from "@image/pexels-photo-276517 (mobile).jpeg";

function Order() {
	return (

	<section className="my-order">
		<section className="my-order-container">
			<h1 className="title">My orders</h1>
			<div className="my-order-content">
				<div className="order">
					<p>
						<span>06.01.2022</span>
						<span>6 articles</span>
					</p>
					<p>$ 180.00</p>
				</div>
				<div className="shopping-cart">
					<figure>
						<img src={bike} alt="bike" />
					</figure>
					<p>Bike</p>
					<p>$ 30,00</p>
				</div>
				<div className="shopping-cart">
					<figure>
						<img src={bike} alt="bike" />
					</figure>
					<p>Bike</p>
					<p>$ 30,00</p>
				</div>
				<div className="shopping-cart">
					<figure>
						<img src={bike} alt="bike" />
					</figure>
					<p>Bike</p>
					<p>$ 30,00</p>
				</div>
				<div className="shopping-cart">
					<figure>
						<img src={bike} alt="bike" />
					</figure>
					<p>Bike</p>
					<p>$ 30,00</p>
				</div>
				<div className="shopping-cart">
					<figure>
						<img src={bike} alt="bike" />
					</figure>
					<p>Bike</p>
					<p>$ 30,00</p>
				</div>
				<div className="shopping-cart">
					<figure>
						<img src={bike} alt="bike" />
					</figure>
					<p>Bike</p>
					<p>$ 30,00</p>
				</div>
			</div>
		</section>
	</section>

	)
}

export default Order;