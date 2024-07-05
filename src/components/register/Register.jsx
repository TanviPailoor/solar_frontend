import React from 'react'
import "./Register.scss";
import login from "../../assets/login.png";
const Register = () => {
  return (
    <div>
        <section className="main">
				<section className="left">
					<img  src={login} alt="login" />
				</section>
				<section className="right">
					<section className="right_subcontainer">
						<section className="top">
							<h2>Create an Account</h2>
							<p>Enter your details below</p>
						</section>
						<section className="mid">
							<div className="fields">
							<input type="Name" placeholder="Name" />
							</div>
							<div className="fields">
							<input type="Email" placeholder="Email"/>
							</div>
                            <div className="fields">
							<input type="Phone" placeholder="Phone"/>
							</div>
                            <div className="fields">
							<input type="Password" placeholder="Password"/>
							</div>
                            <div className="fields">
							<input type="ConfirmPassword" placeholder="Confirm Password"/>
							</div>
						</section>
						<section className="bottom">
							<button type="submit">Create Account</button>
							
						</section>
					</section>
				</section>
			</section>
    </div>
  )
}

export default Register