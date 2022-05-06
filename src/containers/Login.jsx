// import React from 'react';
import "../sass/login.scss";
import logo from "../assets/logos/logo_yard_sale.svg";

const Login = () => {
	return (

	<section className="login">
		<section className="form-container">
			<img src={logo} alt="Logo" className="logo" />
			<form className="form">
				{/* Email */}
				<label htmlFor="email" className="label">Email address</label>
				<input type="text" id="email" placeholder="email@example.com" className="input" />
				{/* Contraseña */}
				<label htmlFor="password" className="label">Password</label>
				<input type="password" id="password" placeholder="************" className="input" />
				{/* Boton de envío */}
				<input type="submit" defaultValue="Log in" className="primary-button" />
				<a href="recovery-password">Forgot my password</a>
			</form>
		</section>
		<button className="secondary-button">Sign Up</button>
	</section>

	)
}

export default Login;
