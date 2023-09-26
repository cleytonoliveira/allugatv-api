import CreateUser from "../../application/usecase/CreateUser";
import VerifyLogin from "../../application/usecase/VerifyLogin";
import HttpServer from "../http/HttpServer";

export default class UserController {
  constructor(
    readonly httpServer: HttpServer,
    readonly user: CreateUser,
    readonly login: VerifyLogin,
  ) {
    this.httpServer.on("post", "/register", async (body: any) => {
      await user.execute(body);
      return {
        statusCode: 201,
      };
    });

    this.httpServer.on("post", "/login", async (body: any) => {
      const { name, email } = await login.execute(body);
      return {
        statusCode: 200,
        body: {
          name,
          email,
        },
      };
    });
  }
}
