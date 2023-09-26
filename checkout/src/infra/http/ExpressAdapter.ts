import express, { Request, Response } from "express";
import cors from "cors";
import HttpServer from "./HttpServer";

export default class ExpressAdapter implements HttpServer {
  app: any;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.use(cors());
  }

  on(method: string, endpoint: string, handler: Function): void {
    this.app[method](endpoint, async (req: Request, res: Response) => {
      const output = await handler(req.body, req.query, req.params);
      res.status(output.statusCode).json(output.body);
    });
  }

  listen(port: number | string): void {
    this.app.listen(port, () => {
      console.log(`Checkout server is running on port ${port}`);
    });
  }
}
