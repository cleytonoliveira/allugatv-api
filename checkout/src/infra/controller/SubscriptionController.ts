import GetSubscriptionByNameId from "../../application/usecase/GetSubscriptionByNameId";
import Subscription from "../../application/usecase/Subscription";
import HttpServer from "../http/HttpServer";

export default class SubscriptionController {
  constructor(
    readonly httpServer: HttpServer,
    readonly subscription: Subscription,
    readonly getSubscriptionByNameId: GetSubscriptionByNameId,
  ) {
    this.httpServer.on("post", "/subscription", async (body: any) => {
      await subscription.execute(body);
      return {
        statusCode: 201,
      };
    });

    this.httpServer.on(
      "get",
      "/subscription/:nameId",
      async (_body: any, _query: any, params: any) => {
        const subscription = await getSubscriptionByNameId.execute(
          params.nameId,
        );
        return {
          statusCode: 200,
          body: subscription,
        };
      },
    );
  }
}
