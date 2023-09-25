import express, { Request, Response } from "express";
import HttpServer from "./HttpServer";

export default class ExpressAdapter implements HttpServer {
  app: any;

  constructor() {
    this.app = express();
    this.app.use(express.json());
  }

  on(method: string, endpoint: string, handler: Function): void {
    this.app[method](endpoint, async (req: Request, res: Response) => {
      const output = await handler(req.body);
      res.status(output.statusCode).json(output.body);
    });
  }

  listen(port: number | string): void {
    this.app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }
}
