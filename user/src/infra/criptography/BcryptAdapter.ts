import bcrypt from "bcrypt";
import BcryptCryptography from "./BcryptCryptography";

export default class BcryptAdapter implements BcryptCryptography {
  constructor(private readonly salt: number) {}

  async encrypt(value: string): Promise<string> {
    return bcrypt.hash(value, this.salt);
  }

  async decrypt(value: string, hash: string): Promise<boolean> {
    return bcrypt.compare(value, hash);
  }
}
