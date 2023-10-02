import JwtPayload from "./JwtPayload";

export default interface Encrypter {
  encrypt(payload: JwtPayload): Promise<string>;
}
