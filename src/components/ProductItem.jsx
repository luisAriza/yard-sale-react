import React, {useState} from 'react'
import "@style/productItem.scss"
import addCart from "@icon/bt_add_to_cart.svg";
import bike from "@image/pexels-photo-276517.jpeg";

function ProductItem() {
	const [cart, setCart] = useState([]);
	const handleClick = () => {
		setCart([]);
	}

	return (

	<div className="product-card">
		<img src={bike} alt="Imagen de bicicleta" className="product-card__img" />
		<div className="product-card__info">
			<div>
				<p className="product-card__price">$ 119.90</p>
				<p className="product-card__name">Bike</p>
			</div>
			<figure onClick={handleClick} className="product-card__add-to-car">
				<img src={addCart} alt="Icono de agregar al carrito" />
			</figure>
			{cart}
		</div>
	</div>

	)
}

export default ProductItem