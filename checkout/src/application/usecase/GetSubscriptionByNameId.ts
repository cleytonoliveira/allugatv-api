import SubscriptionRepository from "../repository/SubscriptionRepository";

export default class GetSubscriptionByNameId {
  constructor(readonly subscriptionRepository: SubscriptionRepository) {}

  async execute(nameId: string) {
    return await this.subscriptionRepository.getSubscriptionByNameId(nameId);
  }
}
