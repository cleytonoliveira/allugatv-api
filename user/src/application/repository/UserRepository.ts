import User from "../../domain/entities/User";

export default interface UserRepository {
  save(user: Omit<User, "id">): Promise<void>;
}
