import React from 'react'
import "@style/createAccount.scss"

const CreateAccount = () => {
	return (

	<main id="main">
		<section className="create-account">
			<section className="create-account__container">
				<h1 className="create-account__title">My account</h1>
				<form action="/" className="form create-account__form">
					{/* Nombre */}
					<label htmlFor="name">Name</label>
					<input type="text" id="name" placeholder="Camilo Perez" className="input create-account__input--name" />
					{/* Email */}
					<label htmlFor="email">Email ad	dress</label>
					<input type="text" id="email" placeholder="email@example.com" className="input create-account__input--email" />
					{/* Contraseña */}
					<label htmlFor="password">Password</label>
					<input type="password" id="password" placeholder="************" className="input create-account__password" />
				</form>
			</section>
			<button className="primary-button create-account__button">Create account</button>
		</section>

		</main>

	)
};

export default CreateAccount;