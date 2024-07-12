import React from "react";
import "./ProductPage.scss";
import solar_panel from "../../assets/solar_panel.png";
import person from "../../assets/person.png";
import StarRate from "../StarRate";
import Button from "../Button/Button";
import { FaTruckFast } from "react-icons/fa6";
import { VscTools } from "react-icons/vsc";
import Card from "../Card";
import ReviewCard from "../reviewCard/ReviewCard";
const relatedItemData = [
	{
		id: 1,
		image: solar_panel ,
		name: "Microtek 2000VA Sinewave Home Inverter",
		price: "₹1520",
		ratings: "88",
	},
	{
		id: 2,
		image: solar_panel ,
		name: "Microtek 2000VA Sinewave Home Inverter",
		price: "₹1520",
		ratings: "88",
	},
	{
		id: 3,
		image: solar_panel ,
		name: "Microtek 2000VA Sinewave Home Inverter",
		price: "₹1520",
		ratings: "88",
	},
	{
		id: 4,
		image:  solar_panel,
		name: "Microtek 2000VA Sinewave Home Inverter",
		price: "₹1520",
		ratings: "88",
	},
];
const reviewData = [
	{
		id: 1,
		image: person,
		name: "John Doe",
		review:"ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
	},
	{
		id: 2,
		image: person,
		name: "John Doe",
		review:"ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
	},
	{
		id: 3,
		image: person,
		name: "John Doe",
		review:"ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
	},
	{
		id: 4,
		image: person,
		name: "John Doe",
		review:"ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
	},
];
const ProductPage = () => {
	return (
		<>
			<section className="main_container">
				<section className="section_1">
					<section className="s1_left">
						<img src={solar_panel} alt="solar_panel_image" />
					</section>
					<section className="s1_right">
						<section className="s1r_top">
							<h2>Home UPS 900VA Zelio+ 1100</h2>
							<section className="s1r_topRating">
								<section className="star">
									<StarRate />
									<p>(150 Reviews)</p>
								</section>
								<div className="line" />
								<section className="avail">
									<p>In Stock</p>
								</section>
							</section>
							<p className="cost">₹1892.00</p>
							<p>
								The Home UPS 900VA Zelio+ 1100is the ideal power solution for 2
								& 3 BHK homes, shops, and small offices, ensuring reliable and
								uninterrupted electricity.
							</p>
							<hr />
						</section>
						<section className="s1r_middle">
							<section className="buy">
								<Button />
								<button>Buy Now</button>
							</section>
							<section className="cart">
								<button>Add to Cart</button>
							</section>
						</section>
						<section className="s1r_bottom">
							<section className="feature">
								<section className="f_left">
									<FaTruckFast style={{ fontSize: "2.5rem" }} />
								</section>
								<section className="f_right">
									<h3>Free Delivery</h3>
									<p>Enter your postal code for Delivery Availability</p>
								</section>
							</section>
							<section className="feature">
								<section className="f_left">
									<VscTools style={{ fontSize: "2.5rem" }} />
								</section>
								<section className="f_right">
									<h3>Installation Included</h3>
									<p>Installation provided with every purchase</p>
								</section>
							</section>
						</section>
					</section>
				</section>
				<section className="section_2">
					<section className="s2_description">
						<h2>Warranty Details</h2>
						<p>Inverter Warranty : 2 Years On-site warranty</p>
						<p>Battery Warranty : 36 Months</p>
					</section>
					<section className="s2_description">
						<h2>Product Description</h2>
						<p>Inverter Type : Sine Wave</p>
						<p>Battery Type : Tall Tubular</p>
						<p>Capacity : 2000 VA</p>
						<p>Battery Capacity : 150AH Inverter</p>
					</section>
					<section className="s2_description">
						<h2>Technical Specifications</h2>
						<p>Inverter VA & Waveform : JM 2000Va Sinewave output</p>
						<p>
							Battery Model & Capacity : EB 1800 – 150 Ah tall tubular 2 nos
						</p>
					</section>
				</section>
				<section className="section_3">
					<section className="box" />
					<h2>Related Item</h2>
				</section>
				<section className="section_4">
					{relatedItemData.map((item) => (
						<Card key={item.id} item={item} />
					))}
				</section>
				<section className="section_5">
					<h2>Customer Feedback</h2>
					<button>Write a Review</button>
				</section>
				<section className="section_6">
					{reviewData.map((item) => (
						<ReviewCard key={item.id} item={item} />
					))}
				</section>
			</section>
		</>
	);
};

export default ProductPage;
