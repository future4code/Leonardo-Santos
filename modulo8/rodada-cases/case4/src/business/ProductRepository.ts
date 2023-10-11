import { Product, Products } from "../model/Product"

export interface ProductRepository {
    insertProduct(product: Product): Promise <void>
    selectProductId(id: string): Promise<Products[]>
}