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
}
