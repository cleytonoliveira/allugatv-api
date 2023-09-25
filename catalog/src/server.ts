import { PrismaClient } from "@prisma/client";
import ExpressAdapter from "./infra/http/ExpressAdapter";
import GetProducts from "./application/usecase/GetProducts";
import AddProduct from "./application/usecase/AddProduct";
import ProductController from "./infra/controller/ProductController";
import ProductRepositoryDatabase from "./infra/repository/ProductRepositoryDatabase";

const PORT = process.env.PORT || 3002;

const httpServer = new ExpressAdapter();
const prisma = new PrismaClient();
const productRepository = new ProductRepositoryDatabase(prisma);
const getProduct = new GetProducts(productRepository);
const addProduct = new AddProduct(productRepository);
new ProductController(httpServer, getProduct, addProduct);

httpServer.listen(PORT);
