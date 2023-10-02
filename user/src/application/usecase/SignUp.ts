import Hasher from "../repository/Hasher";
import UserRepository from "../repository/UserRepository";

type Input = {
  name: string;
  email: string;
  password: string;
};

export default class SignUp {
  constructor(
    readonly userRepository: UserRepository,
    readonly hasher: Hasher,
  ) {}

  async execute(input: Input) {
    const hashedPassword = await this.hasher.encrypt(input.password);
    const user = { ...input, password: hashedPassword };
    return await this.userRepository.save(user);
  }
}
