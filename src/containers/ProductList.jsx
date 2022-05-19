import React from 'react'
import ProductItem from "@component/ProductItem"
import "@style/productList.scss"

function ProductList() {
	return (
		<section className="cards-container">
			<ProductItem />
			<ProductItem />
			<ProductItem />
			<ProductItem />
			<ProductItem />
			<ProductItem />
			<ProductItem />
			<ProductItem />
		</section>
	)
}

export default ProductList