import express from "express";
import proxy from "express-http-proxy";
import cors from "cors";

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use("/catalog", proxy("http://localhost:3002"));

app.listen(PORT, () => {
  console.log(`API Gateway listening on port ${PORT}`);
});
