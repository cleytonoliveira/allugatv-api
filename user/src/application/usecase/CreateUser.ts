import UserRepository from "../repository/UserRepository";

type Input = {
  name: string;
  email: string;
  password: string;
};

export default class CreateUser {
  constructor(readonly userRepository: UserRepository) {}

  async execute(input: Input) {
    return await this.userRepository.save(input);
  }
}
