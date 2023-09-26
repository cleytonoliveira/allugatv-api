import request from "supertest";
import ExpressAdapter from "../../src/infra/http/ExpressAdapter";
import SubscriptionRepositoryMemory from "../../src/infra/repository/SubscriptionRepositoryMemory";
import SubscriptionController from "../../src/infra/controller/SubscriptionController";
import Subscription from "../../src/application/usecase/Subscription";

describe("POST /subscriptions", () => {
  const httpServer = new ExpressAdapter();
  const subscriptionRepository = new SubscriptionRepositoryMemory();
  const subscription = new Subscription(subscriptionRepository);
  new SubscriptionController(httpServer, subscription);

  const app = httpServer.app;
  const newProduct = {
    name: "Basic TV",
    image: "https://via.placeholder.com/150",
    price: 1499.99,
    description: "Basic subscription",
  };

  it("should return status code 201 when add a subscription product", async () => {
    const response = await request(app).post("/subscription").send(newProduct);
    expect(response.status).toBe(201);
  });
});
