export default class Subscription {
  constructor(
    readonly name: string,
    readonly nameId: string,
    readonly productName: string,
    readonly productId: string,
    readonly price: number,
    readonly expiryDate: Date,
  ) {}
}
