import Contact from "./components/contact/Contact";
import Aboutus from "./components/aboutUs/Aboutus";
import ProductPage from "./components/productPage/ProductPage";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Forget from "./components/forgot/Forget";
const App = () => {
	return (
		<div>
			{/* <Contact/> */}
			{/* <Aboutus />  */}
			{/* <ProductPage/> */}
			{/* <Register/> */}

			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Contact />} />
					<Route path="/about" element={<Aboutus />} />
					<Route path="/product" element={<ProductPage />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/forgot-password" element={<Forget />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
