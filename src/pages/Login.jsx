import React, { useRef } from 'react'
import "@style/login.scss"
import logo from "@logo/logo_yard_sale.svg"

const Login = () => {
	const form = useRef(null);
	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(form.current);
		const data = {
			username: formData.get("email"),
			password: formData.get("password"),
		}
		console.log(data);
	}

	return (
	
	<main className="login-section login">
		<section className="login-section__container login__container">
			<a href="/" className="logo login__logo" >
				<img src={logo} alt="Logo"/>
			</a>
			<form action='/' className="form login__form" ref={form} >
				{/* Email */}
				<label htmlFor="email" className="label">Email address</label>
					<input type="text" name="email" placeholder="email@example.com" className="input login__input--email" />
				{/* Contraseña */}
				<label htmlFor="password" className="label">Password</label>
					<input type="password" name="password" placeholder="****************" className="input login__input--password" />
				{/* Boton de envío */}
				<button className="primary-button login__button" onClick={handleSubmit}>
					Log in
				</button>
				<a href="/password-recovery" className="login__password-recovery">Forgot my password</a>
			</form>
		</section>
		<a href="/signup">
			<button className="secondary-button login__button--signup">
				Sign Up
			</button>
		</a>
	</main>

	)
}

export default Login;
