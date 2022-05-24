import React from 'react'
import ProductItem from "@component/ProductItem"
import useGetProducts from '@hook/useGetProducts';
import "@style/productList.scss"

const API = "https://api.escuelajs.co/api/v1/products";

function ProductList() {
	const products = useGetProducts(API);

	return (

	<section className="cards-container">
		{products.map(product => (
			<ProductItem product={product} key={product.id} />
		))}
	</section>

	)
}

export default ProductList