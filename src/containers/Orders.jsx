// import React from 'react';
import "@style/orders.scss";
import arrow from "@icon/flechita.svg";

function Orders() {
	return (

	<section className="my-order">
		<section className="my-order-container">
			<h1 className="tittle">My orders</h1>
			<div className="my-order-content">
				<div className="order">
					<p>
						<span>06.01.2022</span>
						<span>6 articles</span>
					</p>
					<p>$ 180.00</p>
					<img src={arrow} alt="Icono >" />
				</div>
				<div className="order">
					<p>
						<span>02.20.2022</span>
						<span>6 articles</span>
					</p>
					<p>$ 180.00</p>
					<img src={arrow} alt="Icono >" />
				</div>
				<div className="order">
					<p>
						<span>06.16.2021</span>
						<span>6 articles</span>
					</p>
					<p>$ 180.00</p>
					<img src={arrow} alt="Icono >" />
				</div>
				<div className="order">
					<p>
						<span>06.01.2021</span>
						<span>6 articles</span>
					</p>
					<p>$ 180.00</p>
					<img src={arrow} alt="Icono >" />
				</div>
				<div className="order">
					<p>
						<span>04.24.2021</span>
						<span>6 articles</span>
					</p>
					<p>$ 180.00</p>
					<img src={arrow} alt="Icono >" />
				</div>
				<div className="order">
					<p>
						<span>01.02.2021</span>
						<span>6 articles</span>
					</p>
					<p>$ 180.00</p>
					<img src={arrow} alt="Icono >" />
				</div>
			</div>
		</section>
	</section>

	)
}

export default Orders;