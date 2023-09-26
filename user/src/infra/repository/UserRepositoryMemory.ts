import UserRepository from "../../application/repository/UserRepository";
import User from "../../domain/entities/User";

export default class UserRepositoryMemory implements UserRepository {
  users: User[];
  nextUserId: number;

  constructor() {
    this.users = [];
    this.nextUserId = 1;
  }

  async save(user: User): Promise<void> {
    const newUser = {
      ...user,
      userId: this.nextUserId++,
    };
    this.users.push(newUser);
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = this.users.find((user) => user.email === email);
    if (!user) return null;
    return user;
  }
}
