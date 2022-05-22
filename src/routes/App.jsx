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
import Orders from "@page/Orders";
import Order from "@page/Order";
import ShoppingCart from "@container/ShoppingCart";
import MobileMenu from "@container/MobileMenu";
import DesktopMenu from "@container/DesktopMenu";
import NotFound from "@page/NotFound";

const App = () => {
	return (
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
					<Route exact path="/shopping-cart" element={<ShoppingCart />} />
					<Route exact path="/m-menu" element={<MobileMenu />} />
					<Route exact path="/d-menu" element={<DesktopMenu />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
};

export default App;