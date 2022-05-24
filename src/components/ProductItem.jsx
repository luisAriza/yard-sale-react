import React, { useContext } from 'react'
import AppContext from '@context/appContext'
import "@style/productItem.scss"
import addCart from "@icon/bt_add_to_cart.svg"

const ProductItem = ({ product }) => {
	const { addToCart } = useContext(AppContext);

	const handleClick = item => {
		addToCart(item);
	}

	return (

	<div className="product-item">
		<img src={product.images[0]} alt={product.title} className="product-item__img" />
		<div className="product-item__info">
			<div>
				<p className="product-item__price">${product.price}</p>
				<p className="product-item__name">{product.title}</p>
			</div>
			<figure onClick={ () => handleClick(product) } className="product-item__add-to-car">
				<img src={addCart} alt="Icono de agregar al carrito" />
			</figure>
		</div>
	</div>

	)
}

export default ProductItem