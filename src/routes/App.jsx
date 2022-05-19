import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@container/Layout";
import Home from "@page/Home";
import NotFound from "@page/NotFound";
import Login from "@page/Login";
import RecoveryPassword from "@container/RecoveryPassword";
import CreateAccount from "@container/CreateAccount";
import EditAccount from "@container/EditAccount";
import NewPassword from "@container/NewPassword";
import SaveAccount from "@container/SaveAccount";
import ShoppingCart from "@container/ShoppingCart";
import ProductDetails from "@container/ProductDetails";
import Orders from "@container/Orders";
import Order from "@container/Order";
import MobileMenu from "@container/MobileMenu";
import DesktopMenu from "@container/DesktopMenu";

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
					<Route exact path="/shopping-cart" element={<ShoppingCart />} />
					<Route exact path="/product-details" element={<ProductDetails />} />
					<Route exact path="/orders" element={<Orders />} />
					<Route exact path="/order" element={<Order />} />
					<Route exact path="/m-menu" element={<MobileMenu />} />
					<Route exact path="/d-menu" element={<DesktopMenu />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
};

export default App;