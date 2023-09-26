import { PrismaClient } from "@prisma/client";
import ExpressAdapter from "./infra/http/ExpressAdapter";
import SubscriptionRepositoryDatabase from "./infra/repository/SubscriptionRepositoryDatabase";
import Subscription from "./application/usecase/Subscription";
import SubscriptionController from "./infra/controller/SubscriptionController";
import GetSubscriptionByNameId from "./application/usecase/GetSubscriptionByNameId";

const PORT = process.env.PORT || 3003;

const httpServer = new ExpressAdapter();
const prisma = new PrismaClient();
const subscriptionRepository = new SubscriptionRepositoryDatabase(prisma);
const subscription = new Subscription(subscriptionRepository);
const getSubscriptionByNameId = new GetSubscriptionByNameId(
  subscriptionRepository,
);

new SubscriptionController(httpServer, subscription, getSubscriptionByNameId);

httpServer.listen(PORT);
