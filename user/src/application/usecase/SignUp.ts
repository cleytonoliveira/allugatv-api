import bcrypt from "bcrypt";
import UserRepository from "../repository/UserRepository";

type Input = {
  name: string;
  email: string;
  password: string;
};

export default class SignUp {
  constructor(readonly userRepository: UserRepository) {}

  async execute(input: Input) {
    const hashedPassword = bcrypt.hashSync(input.password, 10);
    const user = { ...input, password: hashedPassword };
    return await this.userRepository.save(user);
  }
}
