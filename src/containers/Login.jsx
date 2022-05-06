// import React from 'react';
import "../sass/login.scss"

const Login = () => {
	return (

	<section className="login">
		<section className="form-container">
			<img src="./assets/logos/logo_yard_sale.svg" alt="Logo" className="logo" />
			<form action="/" className="form">
				{/* Email */}
				<label htmlFor="email" className="label">Email address</label>
				<input type="text" id="email" placeholder="email@example.com" className="input" />
				{/* Contraseña */}
				<label htmlFor="password" className="label">Password</label>
				<input type="password" id="password" placeholder="************" className="input" />
				{/* Boton de envío */}
				<input type="submit" defaultValue="Log in" className="primary-button" />
				<a href="/">Forgot my password</a>
			</form>
		</section>
		<button className="secondary-button">Sign Up</button>
	</section>

	)
}

export default Login;
