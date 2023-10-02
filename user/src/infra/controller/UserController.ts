import SignUp from "../../application/usecase/SignUp";
import SignIn from "../../application/usecase/SignIn";
import HttpServer from "../http/HttpServer";

export default class UserController {
  constructor(
    readonly httpServer: HttpServer,
    readonly signUp: SignUp,
    readonly signIn: SignIn,
  ) {
    this.httpServer.on("post", "/register", async (body: any) => {
      await signUp.execute(body);
      return {
        statusCode: 201,
      };
    });

    this.httpServer.on("post", "/login", async (body: any) => {
      const { name, email } = await signIn.execute(body);
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
