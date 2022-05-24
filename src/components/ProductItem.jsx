import React, {useState} from 'react'
import "@style/productItem.scss"
import addCart from "@icon/bt_add_to_cart.svg";

function ProductItem({product}) {
	const [cart, setCart] = useState([]);
	const handleClick = () => {
		setCart([]);
	}

	return (

	<div className="product-item">
		<img src={product.images[0]} alt={product.title} className="product-item__img" />
		<div className="product-item__info">
			<div>
				<p className="product-item__price">${product.price}</p>
				<p className="product-item__name">{product.title}</p>
			</div>
			<figure onClick={handleClick} className="product-item__add-to-car">
				<img src={addCart} alt="Icono de agregar al carrito" />
			</figure>
			{cart}
		</div>
	</div>

	)
}

export default ProductItem