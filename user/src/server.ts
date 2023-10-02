import { PrismaClient } from "@prisma/client";
import ExpressAdapter from "./infra/http/ExpressAdapter";
import UserRepositoryDatabase from "./infra/repository/UserRepositoryDatabase";
import SignUp from "./application/usecase/SignUp";
import UserController from "./infra/controller/UserController";
import SignIn from "./application/usecase/SignIn";

const PORT = process.env.PORT || 3003;

const httpServer = new ExpressAdapter();
const prisma = new PrismaClient();
const userRepository = new UserRepositoryDatabase(prisma);
const user = new SignUp(userRepository);
const login = new SignIn(userRepository);

new UserController(httpServer, user, login);

httpServer.listen(PORT);
