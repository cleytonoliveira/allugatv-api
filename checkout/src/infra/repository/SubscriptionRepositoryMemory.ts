import SubscriptionRepository from "../../application/repository/SubscriptionRepository";
import Subscription from "../../domain/entities/Subscription";

export default class SubscriptionRepositoryDatabase
  implements SubscriptionRepository
{
  subscription: Subscription[];
  nextSubscriptionId: number;

  constructor() {
    this.subscription = [];
    this.nextSubscriptionId = 1;
  }

  async save(subscription: Subscription): Promise<void> {
    const newSubscription = {
      ...subscription,
      subscriptionId: this.nextSubscriptionId++,
    };
    this.subscription.push(newSubscription);
  }
}
