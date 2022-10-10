import { Request, Response } from "express";
import { ProductBusiness } from "../business/ProductBusiness";
import { ProductInputDTO } from "../model/Product";
// import moment from "moment"

export class ProductController {
    constructor(private productBusiness: ProductBusiness) {}

    async createProductController (req: Request, res: Response) {
        try{
            const { name, price, image_url } = req.body

            const newProduct: ProductInputDTO = {
            name,
            price,
            image_url,
            }

            await this.productBusiness.createProductBusiness(newProduct)

            res.status(201).send({
                message: "Product created successfully."
            })

        }catch (error: any){
            res.status(error.statusCode).send(error.message)
        }
    }

    async selectProductIdController (req: Request, res: Response) {
        try {
            const { id } = req.params
    
            const product = await this.productBusiness.selectProductIdBusiness(id)
    
            res.status(201).send(product)
            
        } catch (error: any) {
            res.status(error.statusCode).send(error.message)
        }
    }
}