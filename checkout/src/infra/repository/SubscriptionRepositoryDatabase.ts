import { PrismaClient } from "@prisma/client";
import Subscription from "../../domain/entities/Subscription";

export default class SubscriptionRepositoryDatabase {
  constructor(private readonly prisma: PrismaClient) {}

  async save(subscription: Subscription): Promise<void> {
    await this.prisma.subscription.create({
      data: {
        name: subscription.name,
        nameId: subscription.nameId,
        productName: subscription.productName,
        productId: subscription.productId,
        price: subscription.price,
        expiryDate: subscription.expiryDate,
      },
    });
  }
}
