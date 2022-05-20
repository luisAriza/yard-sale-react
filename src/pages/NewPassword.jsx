import React from 'react'
import "@style/login.scss"
import logo from "@logo/logo_yard_sale.svg"

function NewPassword() {
	return (

	<main className="login-section login">
		<section className="login-section__container login__container">
			<a href="/" className="logo login__logo login__logo--password">
				<img src={logo} alt="Logo" />
			</a>
			<h1 className="login__title">Create a new password</h1>
			<p className="login__subtitle">Enter a new password for your account</p>
			<form action="/" className="form login__form--password">
				<label htmlFor="password" className="label">Password</label>
					<input type="password" id="password" placeholder="************" className="input login__input--password" />
				{/* Confirmación de la contraseña */}
				<label htmlFor="new-password" className="label">Re-enter password</label>
					<input type="password" id="new-password" placeholder="************" className="input login__input--password" />
				{/* Boton de envío */}
				<input type="submit" value="Confirm" className="primary-button login__button--password" />
			</form>
		</section>
	</main>

	)
}

export default NewPassword;