import { PrismaClient } from "@prisma/client";
import ExpressAdapter from "./infra/http/ExpressAdapter";
import UserRepositoryDatabase from "./infra/repository/UserRepositoryDatabase";
import CreateUser from "./application/usecase/CreateUser";
import UserController from "./infra/controller/UserController";
import VerifyLogin from "./application/usecase/VerifyLogin";

const PORT = process.env.PORT || 3003;

const httpServer = new ExpressAdapter();
const prisma = new PrismaClient();
const userRepository = new UserRepositoryDatabase(prisma);
const user = new CreateUser(userRepository);
const login = new VerifyLogin(userRepository);

new UserController(httpServer, user, login);

httpServer.listen(PORT);
