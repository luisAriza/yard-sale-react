import React from 'react'
import "@style/login.scss"
import logo from "@logo/logo_yard_sale.svg"
import email from "@icon/email.svg"

const SendEmail = () => {
	return (

	<main className="login-section login">
		<section className="login-section__container login__container">
			<a href="/" className="logo login__logo login__logo--password">
				<img src={logo} alt="Logo" />
			</a>
			<h1 className="login__title">Email has been sent!</h1>
			<p className="login__subtitle">Please check your inbox for instructions on how to reset the password</p>
			<figure className="login__email-icon">
				<img src={email} alt="Email" />
			</figure>
			<button className="primary-button login__button">Login</button>
			<p className="login__resent">
				<span>Didn't receive the email? </span>
				<a href="#">Resent</a>
			</p>
		</section>
	</main>

	)
}

export default SendEmail;