import bcrypt from "bcrypt";
import UserRepository from "../repository/UserRepository";
import Encrypter from "../repository/Encrypter";

type Input = {
  email: string;
  password: string;
};

export default class SignIn {
  constructor(
    readonly userRepository: UserRepository,
    readonly encrypter: Encrypter,
  ) {}

  async execute(input: Input) {
    const user = await this.userRepository.findByEmail(input.email);
    if (!user) throw new Error("User not found");
    const checkPassword = bcrypt.compareSync(input.password, user.password);
    if (!checkPassword) throw new Error("Invalid password");
    const token = await this.encrypter.encrypt({ userId: user.id });
    return { token };
  }
}
