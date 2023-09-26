import request from "supertest";
import UserController from "../../src/infra/controller/UserController";
import ExpressAdapter from "../../src/infra/http/ExpressAdapter";
import CreateUser from "../../src/application/usecase/CreateUser";
import UserRepositoryMemory from "../../src/infra/repository/UserRepositoryMemory";
import VerifyLogin from "../../src/application/usecase/VerifyLogin";

describe("POST /register", () => {
  const httpServer = new ExpressAdapter();
  const userRepository = new UserRepositoryMemory();
  const user = new CreateUser(userRepository);
  const login = new VerifyLogin(userRepository);
  new UserController(httpServer, user, login);
  const app = httpServer.app;
  const newUser = {
    name: "John Doe",
    email: "john@mail.com",
    password: "123456",
  };

  it("should return status code 201 when register a user", async () => {
    const response = await request(app).post("/register").send(newUser);
    expect(response.status).toBe(201);
  });
});
