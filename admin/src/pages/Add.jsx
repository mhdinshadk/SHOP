import React, { useState } from "react";
import upload_area from "../assets/upload_area.svg";
import { FaPlus } from "react-icons/fa6";
import axios from "axios";
import { toast } from "react-toastify";

const Add = () => {
	const url = 'http://localhost:4000';
	const [image, setImage] = useState(null); // Initialize as null for image
	const [data, setData] = useState({
		name: "",
		description: "",
		category: "Women", // Default category
		price: "" // Empty price by default
	});

	const onChangeHandler = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setData((data) => ({ ...data, [name]: value }));
	};

	const onSubmitHandler = async (event) => {
		event.preventDefault();
		// Ensure image is selected before submitting
		if (!image) {
			toast.error("Please upload an image.");
			return;
		}
		const formatData = new FormData();
		formatData.append('name', data.name);
		formatData.append('description', data.description);
		formatData.append('price', Number(data.price));
		formatData.append('category', data.category);
		formatData.append('image', image);

		try {
			const response = await axios.post(`${url}/api/product/add`, formatData);
			if (response.data.success) {
				// Reset form
				setData({
					name: '',
					description: '',
					price: '',
					category: 'Women'
				});
				setImage(null); // Reset image
				toast.success(response.data.message);
			} else {
				toast.error("Failed to add product.");
			}
		} catch (error) {
			console.error(error);
			toast.error("An error occurred while adding the product.");
		}
	};

	return (
		<section className="p-4 sm:p-10 w-full bg-primary/20">
			<form onSubmit={onSubmitHandler} className="flex flex-col gap-y-5 max-w-[555px]">
				<h4 className="bold-24 pb-2 uppercase">Product Upload</h4>
				<div className="flex flex-col gap-y-5 max-w-24 h-24">
					<p>Upload Image</p>
					<label htmlFor="image">
						<img src={image ? URL.createObjectURL(image) : upload_area} alt="" className="h-20" />
					</label>
					<input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden />
				</div>
				<div className="flex flex-col gap-y-2">
					<p>Product Name</p>
					<input
						onChange={onChangeHandler}
						value={data.name}
						className="ring-1 ring-slate-900/10 py-1 px-3 outline-none"
						type="text"
						name="name"
						placeholder="Type here..."
					/>
				</div>
				<div className="flex flex-col gap-y-2">
					<p>Product Description</p>
					<textarea
						onChange={onChangeHandler}
						value={data.description}
						className="ring-1 ring-slate-900/10 py-1 px-3 outline-none"
						name="description"
						placeholder="Add Description"
						rows={6}
						required
					></textarea>
				</div>
				<div className="flex items-center gap-x-6 text-gray-900/70 medium-15">
					<div className="flex flex-col gap-y-2">
						<p>Product Category</p>
						<select name="category" className="outline-none ring-1 ring-slate-900/10 pl-2" onChange={onChangeHandler} value={data.category}>
							<option value="Women">Women</option>
							<option value="Men">Men</option>
							<option value="Kids">Kids</option>
							<option value="Unisex">Unisex</option>
						</select>
					</div>
					<div className="flex flex-col gap-y-2">
						<p>Product Price</p>
						<input
							className="ring-1 ring-slate-900/10 pl-2 w-24 outline-none"
							type="number"
							name="price"
							placeholder="$20"
							onChange={onChangeHandler}
							value={data.price}
							min="0"
						/>
					</div>
				</div>
				<button type="submit" className="btn-dark sm:w-5/12 flexCenter gap-x-2 !py-2 rounded">
					<FaPlus />
					Add Product
				</button>
			</form>
		</section>
	);
};

export default Add;
