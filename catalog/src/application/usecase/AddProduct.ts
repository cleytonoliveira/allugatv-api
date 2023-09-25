import Product from "../../domain/entities/Product";
import ProductRepository from "../repository/ProductRepository";

type Input = {
  name: string;
  image: string;
  price: number;
  description?: string;
};

export default class AddProduct {
  constructor(readonly productRepository: ProductRepository) {}

  async execute(input: Input) {
    const product = Product.create(
      input.name,
      input.image,
      input.price,
      input.description,
    );
    return await this.productRepository.save(product);
  }
}
