// import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@page/Home";
import NotFound from "@page/NotFound";
import Layout from "@container/Layout";
import Login from "@container/Login";
import RecoveryPassword from "@container/RecoveryPassword";
import CreateAccount from "@container/CreateAccount";
import EditAccount from "@container/EditAccount";
import NewPassword from "@container/NewPassword";
import SaveAccount from "@container/SaveAccount";

const App = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/login" element={<Login />} />
					<Route exact path="/create-account" element={<CreateAccount />} />
					<Route exact path="/edit-account" element={<EditAccount />} />
					<Route exact path="/save-account" element={<SaveAccount />} />
					<Route exact path="/new-password" element={<NewPassword />} />
					<Route exact path="/recovery-password" element={<RecoveryPassword />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
};

export default App;