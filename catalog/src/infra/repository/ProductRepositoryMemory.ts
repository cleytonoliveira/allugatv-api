import ProductRepository from "../../application/repository/ProductRepository";
import Product from "../../domain/entities/Product";

export default class ProductRepositoryMemory implements ProductRepository {
  products: Product[];

  constructor() {
    this.products = [];
  }

  async getAll(
    orderBy: "price" | "name",
    order: "asc" | "desc",
  ): Promise<Product[]> {
    const sortedProducts = this.products.sort((a, b) => {
      if (orderBy === "price") {
        return order === "asc" ? a.price - b.price : b.price - a.price;
      } else if (orderBy === "name") {
        return order === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      }
      return 0;
    });

    return sortedProducts;
  }

  async save(item: Product): Promise<void> {
    this.products.push(item);
  }
}
