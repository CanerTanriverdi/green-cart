import express from "express";
import authUser from "../middlewares/authUser.js";
import { getAllrOrders, getUserOrders, placeOrderCOD } from "../controllers/orderController.js";
import authSeller from "../middlewares/authSeller.js";

const orderRouter = express.Router();

orderRouter.post("/cod", authUser, placeOrderCOD);
orderRouter.get("/user", authUser, getUserOrders);
orderRouter.get("/seller", authSeller, getAllrOrders);

export default orderRouter;
