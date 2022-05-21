import React from 'react'
import ProductInfo from "@component/ProductInfo"
import "@style/productDetail.scss"
import close from "@icon/icon_close.png"

function ProductDetail() {
	return (

	<aside className="product-detail">
		<figure className="product-detail__close-icon">
			<img src={close} alt="Close" />
		</figure>
		<ProductInfo />
	</aside>

	)
}

export default ProductDetail