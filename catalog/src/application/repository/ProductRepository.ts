import Product from "../../domain/entities/Product";

export default interface ProductRepository {
  save(product: Product): Promise<void>;
  getAll(orderBy: "price" | "name", order: "asc" | "desc"): Promise<Product[]>;
  getById(productId: number): Promise<Product | null>;
}
