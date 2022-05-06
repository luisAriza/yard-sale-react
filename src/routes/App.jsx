// import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@page/Home";
import Layout from "@container/Layout";
import Login from "@container/Login";
import RecoveryPassword from "@container/RecoveryPassword";
import NotFound from "@page/NotFound";

const App = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/login" element={<Login />} />
					<Route exact path="/recovery-password" element={<RecoveryPassword />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
};

export default App;