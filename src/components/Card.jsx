
import React from 'react';
import './Card.scss';
import StarRate from './StarRate';

const Card = ({ item }) => {
  return (
		<section className="card">
			<section className="card_image">
				<img src={item.image} alt="item.name" />
			</section>
			<section className="card_content">
				<button>Add to Cart </button>
				<h2>{item.name}</h2>
				<p>{item.price}</p>

				<section className="review">
					<StarRate />
					<p className="numReview">({item.ratings})</p>
				</section>
			</section>
		</section>
	);
};

export default Card;