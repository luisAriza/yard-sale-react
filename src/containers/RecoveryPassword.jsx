// import React from 'react';
import "../sass/recoveryPassword.scss";
import logo from "../assets/logos/logo_yard_sale.svg";
import emailIcon from "../assets/icons/email.svg";

const RecoveryPassword = () => {
	return (

	<section className="login">
		<section className="form-container">
			<img src={logo} alt="Logo" className="logo" />
			<h1 className="title">Email has been sent!</h1>
			<p className="subtitle">Please check your inbox for instructions on how to reset the password</p>
			<div className="email-image">
				<img src={emailIcon} alt="Email" />
			</div>
			<button className="primary-button login-button">Login</button>
			<p className="resent">
				<span>Didn't receive the email? </span>
				<a href="#">Resent</a>
			</p>
		</section>
	</section>

	)
}

export default RecoveryPassword;