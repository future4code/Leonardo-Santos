import { Request, Response } from "express";
import { v4 as uuid } from "uuid"
import {insertProduct} from "../data/queries/insertProduct";
import { getProductByName } from "../data/queries/selectProducts";
import { Product } from "../types";


export const createProduct = async(
    req: Request,
    res: Response
): Promise <void> => {
    try {
        
        const { name, price, imageUrl } = req.body

       
        if(!name || !price || !imageUrl) {
            res.statusCode = 400
            throw new Error("'name', 'price' e 'imageUrl' são obrigatórios!")
        }

        
        const nameProduct = await getProductByName(name)

        
        if(nameProduct) {
            res.statusCode = 409
            throw new Error("Esse produto já está cadastrado!");
        }

        
        const product: Product = {
            id: uuid(),
            name,
            price,
            imageUrl
        }

        
        await insertProduct(product)

        res.status(201).send("Produto cadastrado com sucesso!")

    } catch (error) {
        res.status(500).send({
            message: error.message
          });
    }
}