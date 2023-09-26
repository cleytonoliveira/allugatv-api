import CreateUser from "../../application/usecase/CreateUser";
import HttpServer from "../http/HttpServer";

export default class UserController {
  constructor(
    readonly httpServer: HttpServer,
    readonly user: CreateUser,
  ) {
    this.httpServer.on("post", "/register", async (body: any) => {
      await user.execute(body);
      return {
        statusCode: 201,
      };
    });
  }
}
