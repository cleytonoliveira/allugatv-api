export default class Product {
  constructor(
    readonly productId: number,
    readonly name: string,
    readonly image: string,
    readonly price: number,
    readonly description?: string,
  ) {}

  static create(
    name: string,
    image: string,
    price: number,
    description?: string,
  ) {
    return new Product(0, name, image, price, description);
  }
}
