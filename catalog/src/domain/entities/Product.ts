export default class Product {
  constructor(
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
    return new Product(name, image, price, description);
  }
}
