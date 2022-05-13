// import React from 'react';
import "@style/main.scss";
import addCart from "@icon/bt_add_to_cart.svg";
import bike from "@image/pexels-photo-276517.jpeg";

function Main() {
	return (

	<section className="main-container">
		<div className="cards-container">
			{/* Card #1 */}
			<div className="product-card">
				<img src={bike} alt="Imagen de bicicleta" className="product-img" />
				<div className="product-info">
					<div>
						<p className="product-price">$ 119.90</p>
						<p className="product">Bike</p>
					</div>
					<figure>
						<img src={addCart} alt=" Icono de agregar al carrito" className="icon-add-to-car" />
					</figure>
				</div>
			</div>
			{/* Card #2 */}
			<div className="product-card">
				<img src={bike} alt="Imagen de bicicleta" className="product-img" />
				<div className="product-info">
					<div>
						<p className="product-price">$ 119.90</p>
						<p className="product">Bike</p>
					</div>
					<figure>
						<img src={addCart} alt=" Icono de agregar al carrito" className="icon-add-to-car" />
					</figure>
				</div>
			</div>
			{/* Card #3 */}
			<div className="product-card">
				<img src={bike} alt="Imagen de bicicleta" className="product-img" />
				<div className="product-info">
					<div>
						<p className="product-price">$ 119.90</p>
						<p className="product">Bike</p>
						</div>
					<figure>
						<img src={addCart} alt=" Icono de agregar al carrito" className="icon-add-to-car" />
					</figure>
				</div>
			</div>
			{/* Card #4 */}
			<div className="product-card">
				<img src={bike} alt="Imagen de bicicleta" className="product-img" />
				<div className="product-info">
					<div>
						<p className="product-price">$ 119.90</p>
						<p className="product">Bike</p>
						</div>
					<figure>
						<img src={addCart} alt=" Icono de agregar al carrito" className="icon-add-to-car" />
					</figure>
				</div>
			</div>
			{/* Card #5 */}
			<div className="product-card">
				<img src={bike} alt="Imagen de bicicleta" className="product-img" />
				<div className="product-info">
					<div>
						<p className="product-price">$ 119.90</p>
						<p className="product">Bike</p>
					</div>
					<figure>
						<img src={addCart} alt=" Icono de agregar al carrito" className="icon-add-to-car" />
					</figure>
				</div>
			</div>
			{/* Card #6 */}
			<div className="product-card">
				<img src={bike} alt="Imagen de bicicleta" className="product-img" />
				<div className="product-info">
					<div>
						<p className="product-price">$ 119.90</p>
						<p className="product">Bike</p>
					</div>
					<figure>
						<img src={addCart} alt=" Icono de agregar al carrito" className="icon-add-to-car" />
					</figure>
				</div>
			</div>
			{/* Card #7 */}
			<div className="product-card">
				<img src={bike} alt="Imagen de bicicleta" className="product-img" />
				<div className="product-info">
					<div>
						<p className="product-price">$ 119.90</p>
						<p className="product">Bike</p>
					</div>
					<figure>
						<img src={addCart} alt=" Icono de agregar al carrito" className="icon-add-to-car" />
					</figure>
				</div>
			</div>
			{/* Card #8 */}
			<div className="product-card">
				<img src={bike} alt="Imagen de bicicleta" className="product-img" />
				<div className="product-info">
					<div>
						<p className="product-price">$ 119.90</p>
						<p className="product">Bike</p>
					</div>
					<figure>
						<img src={addCart} alt=" Icono de agregar al carrito" className="icon-add-to-car" />
					</figure>
				</div>
			</div>
		</div>
		</section>

	)
}

export default Main;