import ProductModel from '../models/productModel.js'
import fs from 'fs'


//Add Product
const addProduct = async(req,res)=> {
	let image_filename = `${req.file.filename}`

	const product = new ProductModel({
		name:req.body.name,
		description:req.body.description,
		price:req.body.price,
		category:req.body.category,
		image:image_filename	
	})

	try {
		await product.save()
		res.json({success:true,message:"product Added"})
	} catch (error) {
		console.log(error);
		res.json({success:false,message:"Errorr"})
	}
}

//all Products
const listProduct = async(req,res) => {
	try {
		const products = await ProductModel.find({})
		res.json({succes:true,data:products})
	} catch (error) {
		console.log(error);
		res.json({success:false,message:'Error'})
	}
}

const removeProduct = async(req,res) => {
	try {
		const product = await ProductModel.findById(req.body.id)
		fs.unlink(`upload/${product.image}`,()=> {})

		await ProductModel.findByIdAndDelete(req.body.id)
		res.json({succes:true,message:'ProductRemoved'})
	} catch (error) {
		console.log(error)
		res.json({success:false,message:'Error '})
	}
}

export { addProduct , listProduct , removeProduct}