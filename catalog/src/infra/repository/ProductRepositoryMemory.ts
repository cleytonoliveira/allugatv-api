import ProductRepository from "../../application/repository/ProductRepository";
import Product from "../../domain/entities/Product";

export default class ProductRepositoryMemory implements ProductRepository {
  products: Product[];
  nextProductId: number;

  constructor() {
    this.products = [];
    this.nextProductId = 1;
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

  async save(product: Product): Promise<void> {
    const newProduct = {
      ...product,
      productId: this.nextProductId++,
    };
    this.products.push(newProduct);
  }

  async getById(productId: number): Promise<Product | null> {
    const product = this.products.find(
      (product) => product.productId === productId,
    );
    return product || null;
  }
}
