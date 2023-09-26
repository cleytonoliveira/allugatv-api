import Subscription from "../../application/usecase/Subscription";
import HttpServer from "../http/HttpServer";

export default class SubscriptionController {
  constructor(
    readonly httpServer: HttpServer,
    readonly subscription: Subscription,
  ) {
    this.httpServer.on("post", "/subscription", async (body: any) => {
      await subscription.execute(body);
      return {
        statusCode: 201,
      };
    });
  }
}
