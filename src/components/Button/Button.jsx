import React,{useState} from "react";
import './Button.scss'

const Button = () => {
    const [count, setCount]=useState(0);
    const increment = () => setCount(count+1);
    const decrement = () => setCount(count-1);
	return (
		<div className="container">
			<section className="button" onClick={decrement}>-
            </section>
            <div className="line" />
            <section className="number" >{count}
            </section>
            <div className="line" />
            <section className="button" onClick={increment}>+
            </section>
		</div>
	);
};

export default Button;
