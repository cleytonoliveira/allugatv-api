export default interface Hasher {
  encrypt(password: string): Promise<string>;
  decrypt(password: string, hash: string): Promise<boolean>;
}
