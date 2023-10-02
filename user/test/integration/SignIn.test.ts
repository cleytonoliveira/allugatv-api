import request from "supertest";
import ExpressAdapter from "../../src/infra/http/ExpressAdapter";
import UserRepositoryMemory from "../../src/infra/repository/UserRepositoryMemory";
import SignUp from "../../src/application/usecase/SignUp";
import SignIn from "../../src/application/usecase/SignIn";
import UserController from "../../src/infra/controller/UserController";

describe("POST /login", () => {
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

  beforeAll(async () => {
    await request(app).post("/register").send(newUser);
  });

  it("should return name and email when login a user", async () => {
    const response = await request(app)
      .post("/login")
      .send({ email: newUser.email, password: newUser.password });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      name: "John Doe",
      email: "john@mail.com",
    });
  });
});
