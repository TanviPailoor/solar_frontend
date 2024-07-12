import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";
import "./Button.scss";

const Button = () => {
	const [count, setCount] = useState(0);

	const increment = () => setCount(count + 1);
	const decrement = () => {
		if (count > 0) {
			setCount(count - 1);
		}
	};

	return (
		<div className="container">
			<section className="button" onClick={decrement}>
				<RiSubtractFill />
			</section>
			<section className="number">{count}</section>
			<section className="button" onClick={increment}>
				<IoMdAdd />
			</section>
		</div>
	);
};

export default Button;
