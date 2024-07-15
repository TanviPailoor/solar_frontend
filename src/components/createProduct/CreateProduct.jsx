import React, { useState } from "react";
import "./CreateProduct.scss";

const CreateProduct = () => {
	const [product, setProduct] = useState({
		name: "",
		description: "",
		price: "",
		review: "",
		category: "",
		slug: "",
		star: "",
		stock: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setProduct({
			...product,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(product);
	};

	return (
		<>
			<section className="main_contain">
				<section className="top_section">
					<h2>Create Product</h2>
					<button>View Products</button>
				</section>
				<section className="bottom_section">
					<form onSubmit={handleSubmit}>
						<label>Name</label>
						<input
							type="text"
							name="name"
							required
							value={product.name}
							onChange={handleChange}
						/>
						<label>Description</label>
						<input
							type="text"
							name="description"
							required
							value={product.description}
							onChange={handleChange}
						/>
						<div className="same-line">
							<section className="fields">
								<label>Price</label>
								<input
									type="text"
									name="price"
									required
									value={product.price}
									onChange={handleChange}
								/>
							</section>

							<section className="fields">
								<label>Reviews</label>
								<input
									name="review"
									required
									value={product.review}
									onChange={handleChange}
								/>
							</section>
						</div>

						<label>Category</label>
						<input
							type="text"
							name="category"
							required
							value={product.category}
							onChange={handleChange}
						/>
						<label>Slug</label>
						<input
							type="text"
							name="slug"
							required
							value={product.slug}
							onChange={handleChange}
						/>
						<div className="same-line">
							<section className="fields">
								<label>Stars</label>
								<input
									type="text"
									name="star"
									required
									value={product.star}
									onChange={handleChange}
								/>
							</section>

							<section className="fields">
								<label>Stocks</label>
								<input
									type="text"
									name="stock"
									required
									value={product.stock}
									onChange={handleChange}
								/>
							</section>
						</div>

						<label className="choose_file" htmlFor="file">
							Upload Photo
						</label>
						<input id="file"  type="file" />

						<section className="subbtn">
							<button type="submit">Submit</button>
						</section>
					</form>
				</section>
			</section>
		</>
	);
};

export default CreateProduct;
