import request from "supertest";
import ExpressAdapter from "../../src/infra/http/ExpressAdapter";
import UserRepositoryMemory from "../../src/infra/repository/UserRepositoryMemory";
import CreateUser from "../../src/application/usecase/CreateUser";
import VerifyLogin from "../../src/application/usecase/VerifyLogin";
import UserController from "../../src/infra/controller/UserController";

describe("POST /login", () => {
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
