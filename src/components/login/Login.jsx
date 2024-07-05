import "./Login.scss";
import login from "../../assets/login.png";
import { Link } from "react-router-dom";
const Login = () => {
	return (
		<>
			<section className="login">
				<section className="left">
					<img src={login} alt="login image" />
				</section>
				<section className="right">
					<form action="">
						<section className="right_section1">
							<h2>Log in to Nature save</h2>
							<p>Enter your details below</p>
						</section>
						<section className="right_section2">
							<input placeholder="email" type="email" />
							<input placeholder="Password" type="password" />
						</section>
						<section className="right_section3">
							<section className="btn">
								<button>Login</button>
							</section>
							<section className="links">
								<Link to="/Forget">Forgot Password?</Link>
								<Link to="/Register">New user?</Link>
							</section>
						</section>
					</form>
				</section>
			</section>
		</>
	);
};

export default Login;
