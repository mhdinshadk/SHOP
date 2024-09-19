import ProductModel from '../models/productModel.js';
import fs from 'fs';

// Add Product
const addProduct = async (req, res) => {
  let image_filename = `${req.file.filename}`;

  const product = new ProductModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename
  });

  try {
    await product.save();
    res.json({ success: true, message: "Product Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// List All Products
const listProduct = async (req, res) => {
  try {
    const products = await ProductModel.find({});
    res.json({ success: true, data: products });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: 'Error' });
  }
};

// Remove Product
const removeProduct = async (req, res) => {
  try {
    const product = await ProductModel.findById(req.body.id);
    if (!product) {
      return res.json({ success: false, message: 'Product not found' });
    }

    // Remove the product image from uploads folder
    fs.unlink(`uploads/${product.image}`, (err) => {
      if (err) {
        console.log('Error deleting image:', err);
      }
    });

    // Remove the product from the database
    await ProductModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: 'Product Removed' });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: 'Error' });
  }
};

export { addProduct, listProduct, removeProduct };
