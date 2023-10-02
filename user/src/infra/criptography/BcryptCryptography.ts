export default interface BcryptCryptography {
  encrypt(payload: string): Promise<string>;
  decrypt(token: string, hash: string): Promise<boolean>;
}
