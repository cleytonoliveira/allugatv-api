import { PrismaClient } from "@prisma/client";
import ExpressAdapter from "./infra/http/ExpressAdapter";
import SubscriptionRepositoryDatabase from "./infra/repository/SubscriptionRepositoryDatabase";
import Subscription from "./application/usecase/Subscription";
import SubscriptionController from "./infra/controller/SubscriptionController";

const PORT = process.env.PORT || 3003;

const httpServer = new ExpressAdapter();
const prisma = new PrismaClient();
const subscriptionRepository = new SubscriptionRepositoryDatabase(prisma);
const subscription = new Subscription(subscriptionRepository);

new SubscriptionController(httpServer, subscription);

httpServer.listen(PORT);
