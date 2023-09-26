import { PrismaClient } from "@prisma/client";
import ExpressAdapter from "./infra/http/ExpressAdapter";
import GetProducts from "./application/usecase/GetProducts";
import AddProduct from "./application/usecase/AddProduct";
import ProductController from "./infra/controller/ProductController";
import ProductRepositoryDatabase from "./infra/repository/ProductRepositoryDatabase";
import GetProduct from "./application/usecase/GetProduct";

const PORT = process.env.PORT || 3002;

const httpServer = new ExpressAdapter();
const prisma = new PrismaClient();
const productRepository = new ProductRepositoryDatabase(prisma);
const getProducts = new GetProducts(productRepository);
const addProduct = new AddProduct(productRepository);
const getProduct = new GetProduct(productRepository);

new ProductController(httpServer, getProducts, getProduct, addProduct);

httpServer.listen(PORT);
