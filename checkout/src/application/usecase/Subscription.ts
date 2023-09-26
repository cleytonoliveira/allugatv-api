import SubscriptionRepository from "../repository/SubscriptionRepository";

type Input = {
  name: string;
  nameId: string;
  productName: string;
  productId: string;
  price: number;
  expiryDate: Date;
};

export default class Subscription {
  constructor(readonly subscriptionRepository: SubscriptionRepository) {}

  async execute(input: Input) {
    return await this.subscriptionRepository.save(input);
  }
}
