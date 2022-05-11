// import React from 'react';
import "@style/newPassword.scss";
import logo from "@logo/logo_yard_sale.svg";

function NewPassword() {
	return (

	<section className="login">
		<section className="form-container">
			<img src={logo} alt="Logo" className="logo" />
			<h1 className="title">Create a new password</h1>
			<p className="subtitle">Enter a new password for your account</p>
			<form action="/" className="form">
				<label htmlFor="password" className="label">Password</label>
				<input type="password" id="password" placeholder="************" className="input input-password" />
				{/* Confirmación de la contraseña */}
				<label htmlFor="new-password" className="label">Re-enter password</label>
				<input type="password" id="new-password" placeholder="************" className="input input-password" />
				{/* Boton de envío */}
				<input type="submit" defaultValue="Confirm" className="primary-button login-button" />
			</form>
		</section>
	</section>

	)
}

export default NewPassword;