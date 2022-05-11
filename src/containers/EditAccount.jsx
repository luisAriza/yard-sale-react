// import React from 'react';
import "@style/editAccount.scss";

function EditAccount() {
	return (

	<section className="login">
		<section className="form-container">
			<h1 className="tittle">My account</h1>
			<form action="/" className="form">
				{/* Nombre */}
				<label htmlFor="name" className="label">Name</label>
				<p className="value">Camilo Perez</p>
				{/* Email */}
				<label htmlFor="email" className="label">Email address</label>
				<p className="value">camilo.perez@hotmail.com</p>
				{/* Contraseña */}
				<label htmlFor="password" className="label">Password</label>
				<p className="value">************</p>
			</form>
		</section>
		<button className="secondary-button">Edit</button>
	</section>

	)
}

export default EditAccount;