import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@container/Layout";
import Home from "@page/Home";
import Login from "@page/Login";
import CreateAccount from "@page/CreateAccount";
import MyAccount from "@page/MyAccount";
import SaveAccount from "@page/SaveAccount";
import PasswordRecovery from "@page/PasswordRecovery";
import SendEmail from "@page/SendEmail";
import NewPassword from "@page/NewPassword";
import Orders from "@page/MyOrders";
import Order from "@page/MyOrder";
import Checkout from "@container/Checkout";
import NotFound from "@page/NotFound";
import AppContext from "@context/appContext";
import useInitialState from "@hook/useInitialState";

const App = () => {
	const initialState = useInitialState();

	return (
		<AppContext.Provider value={initialState}>
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route exact path="/login" element={<Login />} />
						<Route exact path="/password-recovery" element={<PasswordRecovery />} />
						<Route exact path="/send-email" element={<SendEmail />} />
						<Route exact path="/new-password" element={<NewPassword />} />
						<Route exact path="/signup" element={<CreateAccount />} />
						<Route exact path="/account" element={<MyAccount />} />
						<Route exact path="/save-account" element={<SaveAccount />} />
						<Route exact path="/orders" element={<Orders />} />
						<Route exact path="/order" element={<Order />} />
						<Route exact path="/checkout" element={<Checkout />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</Layout>
			</BrowserRouter>
		</AppContext.Provider>
	);
};

export default App;