import "./forget.scss";
import React from 'react'
import forgot from "../../assets/forgot.png";
import { Link } from "react-router-dom";
const Forget = () => {
  return (
		<>
			<section className="main-container">
				<section className="left1">
					<img src={forgot} alt="image" />
				</section>
				<section className="right1">
					<section className="rtop">
						<h2>Forgot Password</h2>
						<p>
							Enter the E-mail address associated with your account and we will
							send you a link to reset your password.
						</p>
					</section>
					<section className="rmid">
						<input type="Email" placeholder="Email" />
					</section>
					<section className="rbottom">
						<button>Continue</button>
						<section className="blinks">
							<Link to="/Register">New user?</Link>
						</section>
					</section>
				</section>
			</section>
		</>
	);
}

export default Forget