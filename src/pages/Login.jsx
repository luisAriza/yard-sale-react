// import React from 'react';
import "@style/login.scss";
import logo from "@logo/logo_yard_sale.svg";

const Login = () => {
	return (
	
	<main id="main">
		<section className="login">
			<section className="login__container">
				<a href="/" className="logo" >
					<img src={logo} alt="Logo"/>
				</a>
				<form className="login__form">
					{/* Email */}
					<label htmlFor="email">Email address</label>
						<input type="text" id="email" placeholder="email@example.com" className="input login__input--email" />
					{/* Contraseña */}
					<label htmlFor="password">Password</label>
						<input type="password" id="password" placeholder="****************" className="input login__input--password" />
					{/* Boton de envío */}
					<input type="submit" value="Log in" className="primary-button" />
					<a href="recovery-password">Forgot my password</a>
				</form>
			</section>
			<button className="secondary-button">Sign Up</button>
		</section>
	</main>

	)
}

export default Login;
