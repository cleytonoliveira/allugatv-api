import Subscription from "../../domain/entities/Subscription";

export default interface SubscriptionRepository {
  save(subscription: Subscription): Promise<void>;
  getSubscriptionByNameId(nameId: string): Promise<Subscription>;
}
