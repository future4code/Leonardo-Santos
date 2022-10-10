export class Products {
  constructor(
      private id: string,
      private name:string,
      private price: string,
      private image_url: string,
  ){}

  public getId () {
      return this.id
  }
  public getName () {
      return this.name
  }
  public getPrice () {
      return this.price
  }
  public getImage_url () {
      return this.image_url
  }

}

export interface ProductInputDTO {
  name:string
  price: string,
  image_url: string,
}


export type Product = {
  id: string,
  name:string
  price: string,
  image_url: string,
}