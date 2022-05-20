import React from 'react'
import '@style/login.scss'
import logo from "@logo/logo_yard_sale.svg"

const PasswordRecovery = () => {
	return (

	<main className="login-section login">
		<section className="login-section__container login__container">
			<a href="/" className="logo login__logo login__logo--password">
				<img src={logo} alt="logo" />
			</a>
			<h1 className="login__title">Password recovery</h1>
			<p className="login__subtitle">Inform the email address used to create your account</p>
			<form action="/" className="form login__form--password">
				<label htmlFor="email" className="label">Email address</label>
					<input type="text" id="email" placeholder="email@example.com" className="input login__input--email" />
				<input type="submit" value="Confirm" className="primary-button login__button--password" />
				<a href="/login" className='login__back-login'>Back to log in</a>
			</form>
		</section>
	</main>

	);
}

export default PasswordRecovery;