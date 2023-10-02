import JwtPayload from "../../application/repository/JwtPayload";

export default interface JwtCryptography {
  encrypt(payload: JwtPayload): Promise<string>;
  decrypt(token: string): Promise<string | object>;
}
