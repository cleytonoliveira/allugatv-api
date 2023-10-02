import request from "supertest";
import UserController from "../../src/infra/controller/UserController";
import ExpressAdapter from "../../src/infra/http/ExpressAdapter";
import SignUp from "../../src/application/usecase/SignUp";
import UserRepositoryMemory from "../../src/infra/repository/UserRepositoryMemory";
import SignIn from "../../src/application/usecase/SignIn";

describe("POST /register", () => {
  const httpServer = new ExpressAdapter();
  const userRepository = new UserRepositoryMemory();
  const user = new SignUp(userRepository);
  const login = new SignIn(userRepository);
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
