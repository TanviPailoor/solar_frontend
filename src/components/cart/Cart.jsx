import React from 'react'
import "./Cart.scss"; 
import { FaArrowRight } from "react-icons/fa6";
import cartimage from "../../assets/cartimage.png";
import Button from "../Button/Button";
import { RiDeleteBin6Line } from "react-icons/ri";
const Cart = () => {
  return (
		<>
			<section className="main_section">
				<section className="section_1">
					<h2>Your Cart</h2>
				</section>
				<section className="section_2">
					<section className="s2_left">
						<section className="s2_leftItem">
							<section className="indiItem">
								<img src={cartimage} alt="image" />
								<section className="itemDesc">
									<h3>3M Appliance Protection System IAS430SS</h3>
									<p>Quantity: 1 </p>
									<h2>₹ 1425</h2>
								</section>
							</section>
							<section className="itemButtons">
								<button>
									<RiDeleteBin6Line />
								</button>
								<Button />
						  </section>
					  </section>
					  <hr />
						<section className="s2_leftItem">
							<section className="indiItem">
								<img src={cartimage} alt="image" />
								<section className="itemDesc">
									<h3>3M Appliance Protection System IAS430SS</h3>
									<p>Quantity: 1 </p>
									<h2>₹ 1425</h2>
								</section>
							</section>
							<section className="itemButtons">
								<button>
									<RiDeleteBin6Line />
								</button>
								<Button />
							</section>
					  </section>
					  <hr />
					</section>
					<section className="s2_right">
						<h3>Order Summary</h3>
						<section className="order_detailS2">
							<div className="priceList">
								<p className='name'>Subtotal</p>
								<p className='rupees'>₹2890</p>
							</div>
							<div className="priceList">
								<p className='name'>Discount (-20%)</p>
								<p className='rupees'>-₹ 113</p>
							</div>
							<div className="priceList">
								<p className='name'>Delivery Fee</p>
								<p className='rupees'>₹ 115</p>
							</div>
							<hr />
							<div className="priceList">
								<p className='name'>Total</p>
								<p className='rupees'>₹ 5467</p>
							</div>
						</section>
						<section className="apply">
							<button className="promoButton">Add promo code</button>
							<button className="applyButton">Apply</button>
						</section>
						<section className="checkout">
							<button className="checkoutButton">
								<span>Go to Checkout </span>
								<FaArrowRight />
							</button>
						</section>
					</section>
				</section>
			</section>
		</>
	);
}

export default Cart