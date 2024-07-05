import "./Contact.scss";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { SiInstagram } from "react-icons/si";
import { FiFacebook } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
	return (
		<section className="main-section font">
			<section className="first-section">
				<section className="left-section">
					<section className="left-top">
						<div className="round">
							<IoCallOutline style={{ fontSize: "2.5rem", color: "white" }} />
						</div>
						<div className="heading">
							<h2>Call Us</h2>
						</div>
						<div className="contact-details">
							<p>+91 9743888996</p>
							<p>+91 9900267279</p>
							<hr style={{ border: "1px solid black" }} />
						</div>
					</section>
					<section className="left-middle">
						<div className="round">
							<MdOutlineMailOutline
								style={{ fontSize: "2.5rem", color: "white" }}
							/>
						</div>
						<div className="heading">
							<h2>Write To Us</h2>
						</div>
						<div className="contact-details">
							<p>natureraisetech@gmail.com</p>
							<hr style={{ border: "1px solid black" }} />
						</div>
					</section>
					<section className="left-bottom">
						<h2>FOLLOW US</h2>
						<div className="icons">
							<SiInstagram style={{ fontSize: "2rem" }} />
							<FiFacebook style={{ fontSize: "2rem" }} />
							<FaXTwitter style={{ fontSize: "2rem" }} />
						</div>
					</section>
				</section>
				<section className="right-section">
					<section className="right_top">
						<div className="input-container">
							<input type="text" placeholder="Name " />
							<span className="asterisk">*</span>
						</div>
						<div className="input-container">
							<input type="email" placeholder="Email" />
							<span className="asterisk">*</span>
						</div>
						<div className="input-container">
							<input type="tel" placeholder="Phone Number" />
							<span className="asterisk">*</span>
						</div>
					</section>
					<section className="right_middle">
						<textarea
							rows="10"
							className="font"
							placeholder="Enter your message"
						></textarea>
					</section>
					<section className="right_bottom">
						<button>Send Message</button>
					</section>
				</section>
			</section>
		</section>
	);
};
export default Contact;
