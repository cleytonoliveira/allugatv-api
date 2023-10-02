import { PrismaClient } from "@prisma/client";
import ExpressAdapter from "./infra/http/ExpressAdapter";
import UserRepositoryDatabase from "./infra/repository/UserRepositoryDatabase";
import SignUp from "./application/usecase/SignUp";
import UserController from "./infra/controller/UserController";
import SignIn from "./application/usecase/SignIn";
import JwtAdapter from "./infra/criptography/JwtAdapter";
import BcryptAdapter from "./infra/criptography/BcryptAdapter";

const PORT = process.env.PORT || 3003;
const JWT_SECRET = process.env.JWT_SECRET || "secret";

const httpServer = new ExpressAdapter();
const prisma = new PrismaClient();
const userRepository = new UserRepositoryDatabase(prisma);
const hasher = new BcryptAdapter(10);
const user = new SignUp(userRepository, hasher);
const jwt = new JwtAdapter(JWT_SECRET);
const login = new SignIn(userRepository, jwt, hasher);

new UserController(httpServer, user, login);

httpServer.listen(PORT);
