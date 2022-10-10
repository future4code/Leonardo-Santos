import { ProductRepository } from "../business/ProductRepository";
import { Products, Product } from "../model/Product";
import { BaseDataBase } from "./BaseDataBase";

export class ProductDataBase extends BaseDataBase implements ProductRepository{

    private static TABLE_NAME = "products_Amaro"

    async insertProduct (product: Product) {
        try {
            await BaseDataBase.connection
            .insert({
                id: product.id,
                name: product.name,
                price: product.price,
                image_url: product.image_url,
            })
            .into(ProductDataBase.TABLE_NAME)
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async selectProductId (id: string): Promise<Products[]> {
        try {
            const [product] = await BaseDataBase.connection
            .select("products_Amaro.id", "products_Amaro.name", "products_Amaro.price", "products_Amaro.image_url")
            // .innerJoin("products_Amaro.id")
            .where({"products_Amaro.id": id})
            .into(ProductDataBase.TABLE_NAME)

            return product 
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}