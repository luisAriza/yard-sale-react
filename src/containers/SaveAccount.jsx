// import React from 'react';
// import "@style/saveAccount.scss";

function SaveAccount() {
	return (

	<section className="login">
		<section className="form-container">
			<h1 className="title">My account</h1>
			<form action="/" className="form">
				{/* Nombre */}
				<label htmlFor="name" className="label">Name</label>
				<input type="text" id="name" placeholder="Camilo Perez" className="input" />
				{/* Email */}
				<label htmlFor="email" className="label">Email address</label>
				<input type="text" id="email" placeholder="email@example.com" className="input" />
				{/* Contraseña */}
				<label htmlFor="password" className="label">Password</label>
				<input type="password" id="password" placeholder="************" className="input" />
			</form>
		</section>
		<button className="primary-button">Save</button>
	</section>

	)
}

export default SaveAccount;