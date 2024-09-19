import express from 'express';
import fs from 'fs';
import multer from 'multer';
import { addProduct, listProduct, removeProduct } from '../controllers/productController.js';

const productRouter = express.Router();

// Ensure 'uploads' directory exists
const uploadDir = './uploads';
if (!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir);
}

// Multer Storage Engine
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads'); // Destination folder
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`); // Unique filename with timestamp
  }
});

const upload = multer({ storage: storage });

// Routes
productRouter.post('/add', upload.single('image'), addProduct);
productRouter.get('/list', listProduct);
productRouter.post('/remove', removeProduct);

export default productRouter;
