import Product from "../../domain/entities/Product";

export default interface ProductRepository {
  save(product: Product): Promise<void>;
}
