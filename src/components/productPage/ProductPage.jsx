import React from "react";
import "./ProductPage.scss";
import solar_panel from "../../assets/solar_panel.png";
import StarRate from "../StarRate";
import Button from "../Button/Button";
import { FaTruckFast } from "react-icons/fa6";
import { RiLoopLeftLine } from "react-icons/ri";
import Card from "../Card";
import person from "../../assets/person.png";
const reviewData = [
	{
		id:1,
		photo:person,
		name:'Floyd Miles',
		review:'The LG NeON 2 solar panel is efficient, durable, and aesthetically pleasing. With over 20% efficiency, it generates more energy per square foot. Its design withstands harsh weather, and it features LG Cello technology for better performance.'

	},
	{
		id:2,
		photo:person,
		name:'Floyd Miles',
		review:'The LG NeON 2 solar panel is efficient, durable, and aesthetically pleasing. With over 20% efficiency, it generates more energy per square foot. Its design withstands harsh weather, and it features LG Cello technology for better performance.'
	
	},
	{
		id:3,
		photo:person,
		name:'Floyd Miles',
		review:'The LG NeON 2 solar panel is efficient, durable, and aesthetically pleasing. With over 20% efficiency, it generates more energy per square foot. Its design withstands harsh weather, and it features LG Cello technology for better performance.'

	},
	{
		id:4,
		photo:person,
		name:'Floyd Miles',
		review:'The LG NeON 2 solar panel is efficient, durable, and aesthetically pleasing. With over 20% efficiency, it generates more energy per square foot. Its design withstands harsh weather, and it features LG Cello technology for better performance.'

	}
];
const ProductPage = () => {
	return (
		<section className="main_section">
			<section className="first">
				<section className="left">
					<img src={solar_panel} alt="solar" />
				</section>
				<section className="right">
					<section className="top">
						<h2>200 Spring Solar HP (PR-H)</h2>
						<section className="rating">
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
						<p>A one-stop solution to efficient bulk hot water situations</p>
						<hr />
					</section>
					<section className="mid">
						<section className="buy">
                            <Button className="quantity"/>
                            <button>Buy Now</button>
                        </section>
						<section className="cart">
                            <button>Add to Cart</button>
                        </section>
					</section>
					{/* <section className="bottom">
                        <section className="feature">
                            <section className="left">
                            <FaTruckFast style={{ fontSize: "2.5rem", }}/>
                            </section>
                            <section className="right">
                                <h3>Free Delivery</h3>
                                <p>Enter your postal code for Delivery Availability</p>
                            </section>
                        </section>
                        <section className="feature">
                        <section className="left">
                        <RiLoopLeftLine style={{ fontSize: "2.5rem", }}/>
                        </section>
                            <section className="right">
                                <h3>Return Delivery</h3>
                                <p>Free 30 Days Delivery Returns. Details</p>
                            </section>
                        </section>
                    </section> */}
				</section>
			</section>
			<section className="second">
				<section className="details">
					<h3>Warranty Details</h3>
					<p>Inverter Warranty : 2 Years On-site warranty</p>
					<p>Battery Warranty : 36 Months</p>
				</section>
				<section className="details">
					<h3>Product Description</h3>
					<p>Inverter Type : Sine Wave</p>
					<p>Battery Type : Tall Tubular</p>
					<p>Capacity : 2000 VA</p>
					<p>Battery Capacity : 150AH Inverter</p>
					<p>Warranty : 2 Years</p>
				</section>
				<section className="details">
					<h3>Technical Specifications</h3>
					<p>Inverter VA & Waveform : JM 2000Va Sinewave output</p>
					<p>Battery Model & Capacity : EB 1800 – 150 Ah tall tubular 2 nos</p>
				</section>
			</section>
			<section className="third">

			</section>
			<section className="fourth">
				<section className="ftop">
					<h2>Customer Feedback</h2>
					<button>Write a Review</button>
				</section>
				<section className="fbottom">
				{/* {productData.map(product => (
          <Card
            key={product.id}
            photo={product.photo}
            name={product.name}
            review={product.review}
          />
        ))} */}

				</section>
			</section>
		</section>
	);
};

export default ProductPage;
