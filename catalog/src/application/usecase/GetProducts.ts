import ProductRepository from "../repository/ProductRepository";

export default class GetProducts {
  constructor(readonly productRepository: ProductRepository) {}

  async execute() {
    return await this.productRepository.getAll();
  }
}
