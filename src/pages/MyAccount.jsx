import React from 'react'
import "@style/account.scss"

function MyAccount() {
	return (

	<main className="login-section account">
		<section className="login-section__container account__container">
			<h1 className="account__title">My account</h1>
			<form action="/" className="form account__form">
				{/* Nombre */}
				<label htmlFor="name" className="label">Name</label>
					<p className="account__value">Camilo Perez</p>
				{/* Email */}
				<label htmlFor="email" className="label">Email address</label>
					<p className="account__value">camilo.perez@hotmail.com</p>
				{/* Contraseña */}
				<label htmlFor="password" className="label">Password</label>
					<p className="account__value">************</p>
			</form>
		</section>
		<input type="submit" value="Edit" className="secondary-button account__button" />
	</main>

	)
}

export default MyAccount;