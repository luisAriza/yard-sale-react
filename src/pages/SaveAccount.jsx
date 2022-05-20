import React from 'react'
import "@style/account.scss"

function SaveAccount() {
	return (

	<main className="login-section account">
		<section className="login-section__container account__container">
			<h1 className="account__title">My account</h1>
			<form action="/" className="form account__form">
				{/* Nombre */}
				<label htmlFor="name" className="label">Name</label>
					<input type="text" id="name" placeholder="Camilo Perez" className="input account__input--name" />
				{/* Email */}
				<label htmlFor="email" className="label">Email address</label>
					<input type="text" id="email" placeholder="email@example.com" className="input account__input--email" />
				{/* Contraseña */}
				<label htmlFor="password" className="label">Password</label>
					<input type="password" id="password" placeholder="************" className="input account__input--password" />
			</form>
		</section>
		<button className="primary-button account__button">Save</button>
	</main>

	)
}

export default SaveAccount;