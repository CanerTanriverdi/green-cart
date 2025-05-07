import express from "express";
import { upload } from "../configs/multer.js";
import authSeller from "../middlewares/authSeller.js";
import { addProduct, changeStock, productById, productList } from "../controllers/productController.js";

const productRouter = express.Router();

const images = "images"; // bunu eklemek dogru oldu mu bilmiyorum kontrol et
productRouter.post("/add", upload.array([images]), authSeller, addProduct);
productRouter.get("/list", productList);
productRouter.get("/id", productById);
productRouter.post("/stock", authSeller, changeStock);

export default productRouter;
