import express, { Request, Response } from "express";

const app = express();

const PORT = process.env.PORT || 3001;

app.get("/products", (req: Request, res: Response) => {
  res.json("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
