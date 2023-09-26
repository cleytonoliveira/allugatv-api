import request from "supertest";
import ExpressAdapter from "../../src/infra/http/ExpressAdapter";
import SubscriptionRepositoryMemory from "../../src/infra/repository/SubscriptionRepositoryMemory";
import SubscriptionController from "../../src/infra/controller/SubscriptionController";
import Subscription from "../../src/application/usecase/Subscription";
import GetSubscriptionByNameId from "../../src/application/usecase/GetSubscriptionByNameId";

describe("GET /subscriptions", () => {
  const httpServer = new ExpressAdapter();
  const subscriptionRepository = new SubscriptionRepositoryMemory();
  const subscription = new Subscription(subscriptionRepository);
  const getSubscriptionByNameId = new GetSubscriptionByNameId(
    subscriptionRepository,
  );
  new SubscriptionController(httpServer, subscription, getSubscriptionByNameId);
  const app = httpServer.app;

  const newSubscription = [
    {
      name: "John Doe",
      nameId: "1",
      productName: "Basic TV",
      productId: "1",
      price: 1499.99,
      expiryDate: new Date().toString(),
    },
    {
      name: "Mary Doe",
      nameId: "2",
      productName: "Premium TV",
      productId: "2",
      price: 2399.89,
      expiryDate: new Date().toString(),
    },
    {
      name: "Jane Doe",
      nameId: "3",
      productName: "Ultimate TV",
      productId: "3",
      price: 3499.99,
      expiryDate: new Date().toString(),
    },
  ];

  beforeAll(async () => {
    newSubscription.forEach(async (subscription) => {
      await request(app).post("/subscription").send(subscription);
    });
  });

  it("should return a list of subscriptions by name id", async () => {
    const response = await request(app).get(
      `/subscription/${newSubscription[0].nameId}`,
    );

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      subscriptionId: 1,
      name: "John Doe",
      nameId: "1",
      productName: "Basic TV",
      productId: "1",
      price: 1499.99,
      expiryDate: new Date().toString(),
    });
  });
});
