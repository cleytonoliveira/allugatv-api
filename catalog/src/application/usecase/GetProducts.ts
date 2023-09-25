import ProductRepository from "../repository/ProductRepository";

type Input = {
  orderBy: "price" | "name";
  order: "asc" | "desc";
};

export default class GetProducts {
  constructor(readonly productRepository: ProductRepository) {}

  async execute(input: Input) {
    return await this.productRepository.getAll(input.orderBy, input.order);
  }
}
