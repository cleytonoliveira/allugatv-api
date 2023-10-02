import jwt from "jsonwebtoken";
import JwtCryptography from "./JwtCryptography";
import JwtPayload from "../../application/repository/JwtPayload";

export default class JwtAdapter implements JwtCryptography {
  constructor(private readonly secretKey: string) {}

  async encrypt(payload: JwtPayload): Promise<string> {
    return jwt.sign(payload, this.secretKey);
  }

  async decrypt(token: string): Promise<string | object> {
    return jwt.verify(token, this.secretKey);
  }
}
