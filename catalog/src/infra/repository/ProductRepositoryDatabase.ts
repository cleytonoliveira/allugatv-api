import { PrismaClient } from "@prisma/client";
import ProductRepository from "../../application/repository/ProductRepository";
import Product from "../../domain/entities/Product";

export default class ProductRepositoryDatabase implements ProductRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async save(product: Product): Promise<void> {
    await this.prisma.product.create({
      data: {
        name: product.name,
        image: product.image,
        price: product.price,
        description: product.description,
      },
    });
  }

  async getAll(
    orderBy: "price" | "name",
    order: "asc" | "desc",
  ): Promise<Product[]> {
    const products = await this.prisma.product.findMany({
      orderBy: {
        [orderBy]: order,
      },
    });
    return products.map((product) => ({
      productId: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      description: product.description || "",
    }));
  }

  async getById(productId: number): Promise<Product | null> {
    const product = await this.prisma.product.findUnique({
      where: {
        id: productId,
      },
    });

    if (!product) {
      return null;
    }

    return new Product(
      product.id,
      product.name,
      product.image,
      product.price,
      product.description || "",
    );
  }
}
