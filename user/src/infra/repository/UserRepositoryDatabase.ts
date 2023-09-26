import { PrismaClient } from "@prisma/client";
import User from "../../domain/entities/User";

export default class UserRepositoryDatabase {
  constructor(private readonly prisma: PrismaClient) {}

  async save(user: User): Promise<void> {
    await this.prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
      },
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) return null;
    return new User(user.id, user.name, user.email, user.password);
  }
}
