import React from "react";
import "./ReviewCard.scss";
import StarRate from "../StarRate";

const ReviewCard = ({ item }) => {
	return (
		<section className="card">
			<section className="top">
				<img src={item.image} alt="item.name" />
				<StarRate />
			</section>
			<section className="bottom">
				<h2>{item.name}</h2>
				<p>{item.review}</p>
			</section>
		</section>
	);
};

export default ReviewCard;
