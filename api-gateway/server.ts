import express from "express";
import proxy from "express-http-proxy";
import cors from "cors";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const PORT = process.env.PORT || 3001;
const API_CATALOG = process.env.API_CATALOG || "localhost";
const API_CHECKOUT = process.env.API_CHECKOUT || "localhost";
const API_USER = process.env.API_USER || "localhost";

const app = express();

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Gateway",
      description: "Principais rotas da aplicação Allugatv",
      version: "1.0.0",
    },
  },
  apis: ["swagger.ts"],
};

const swaggerSpec = swaggerJsdoc(options);

app.use(cors());
app.use("/catalog", proxy(`http://${API_CATALOG}:3002`));
app.use("/checkout", proxy(`http://${API_CHECKOUT}:3003`));
app.use("/user", proxy(`http://${API_USER}:3004`));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
  console.log(`API Gateway listening on port ${PORT}`);
});
