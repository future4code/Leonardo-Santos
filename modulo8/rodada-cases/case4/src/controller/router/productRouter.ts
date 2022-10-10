import express from "express";
import { ProductBusiness } from "../../business/ProductBusiness";
import { ProductController } from "../productController";
import { ProductDataBase } from "../../data/ProductsDataBase";


export const productRouter = express.Router()
const productDataBase = new ProductDataBase()
const productBusiness = new ProductBusiness(productDataBase)
const productController  = new ProductController(productBusiness)


productRouter.post("/create", (req, res) => productController.createProductController(req, res))
productRouter.get("/:id", (req, res) => productController.selectProductIdController(req, res))