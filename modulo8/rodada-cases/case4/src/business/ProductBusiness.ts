import { ProductRepository } from "./ProductRepository";
import { invalidProduct } from "../Error/CustomErrorProduct";
import { MissingFieldsToComplete } from "../Error/MissingFieldsComplet";
import { ProductInputDTO, Product, Products } from "../model/Product";

export class ProductBusiness {
  constructor(private productDataBase: ProductRepository) {}
  async createProductBusiness(input: ProductInputDTO) {
    try {
      const { name, price, image_url } = input;
      if (!name || !price || !image_url) {
        throw new MissingFieldsToComplete();
      }

      const id = Date.now().toString();

      const product: Product = {
        id,
        ...input,
      };

      await this.productDataBase.insertProduct(product);

      return product;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  async selectProductIdBusiness(id: string): Promise<Products[]> {
    try {
      const product = await this.productDataBase.selectProductId(id);

      if (!product) {
        throw new invalidProduct();
      }

      return product;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
