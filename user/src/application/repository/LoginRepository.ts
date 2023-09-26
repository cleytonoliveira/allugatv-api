import User from "../../domain/entities/User";

export default interface UserRepository {
  findByEmail(email: string): Promise<User | null>;
}
