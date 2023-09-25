import ProductRepository from "../../application/repository/ProductRepository";
import Product from "../../domain/entities/Product";

export default class ProductRepositoryMemory implements ProductRepository {
  products: Product[];

  constructor() {
    this.products = [];
  }

  async getAll(): Promise<Product[]> {
    return this.products;
  }

  async save(item: Product): Promise<void> {
    this.products.push(item);
  }
}
