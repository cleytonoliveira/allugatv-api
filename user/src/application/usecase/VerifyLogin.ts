import bcrypt from "bcrypt";
import LoginRepository from "../repository/LoginRepository";

type Input = {
  email: string;
  password: string;
};

export default class VerifyLogin {
  constructor(readonly loginRepository: LoginRepository) {}

  async execute(input: Input) {
    const user = await this.loginRepository.findByEmail(input.email);
    if (!user) throw new Error("User not found");
    const checkPassword = bcrypt.compareSync(input.password, user.password);
    if (!checkPassword) throw new Error("Invalid password");
    const { name, email } = user;
    return { name, email };
  }
}
