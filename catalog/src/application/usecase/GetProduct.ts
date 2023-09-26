import ProductRepository from "../repository/ProductRepository";

export default class GetProduct {
  constructor(readonly productRepository: ProductRepository) {
    this.productRepository = productRepository;
  }

  async execute(productId: number) {
    return await this.productRepository.getById(productId);
  }
}
