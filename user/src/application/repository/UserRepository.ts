import User from "../../domain/entities/User";

export default interface SubscriptionRepository {
  save(user: Omit<User, "id">): Promise<void>;
}
