import express from "express";
import proxy from "express-http-proxy";

const PORT = process.env.PORT || 3000;

const app = express();

app.use("/catalog", proxy("http://localhost:3001"));

app.listen(PORT, () => {
  console.log(`API Gateway listening on port ${PORT}`);
});
