import request from "supertest";
import AddProduct from "../../src/application/usecase/AddProduct";
import GetProduct from "../../src/application/usecase/GetProduct";
import GetProducts from "../../src/application/usecase/GetProducts";
import ProductController from "../../src/infra/controller/ProductController";
import ExpressAdapter from "../../src/infra/http/ExpressAdapter";
import ProductRepositoryMemory from "../../src/infra/repository/ProductRepositoryMemory";

describe("POST /products", () => {
  const httpServer = new ExpressAdapter();
  const productRepository = new ProductRepositoryMemory();
  const getProducts = new GetProducts(productRepository);
  const addProduct = new AddProduct(productRepository);
  const getProduct = new GetProduct(productRepository);
  new ProductController(httpServer, getProducts, getProduct, addProduct);
  const app = httpServer.app;
  const newProduct = {
    name: "Basic TV",
    image: "https://via.placeholder.com/150",
    price: 1499.99,
    description: "Basic subscription",
  };

  it("should return status code 201 when add a subscription product", async () => {
    const response = await request(app).post("/products").send(newProduct);
    expect(response.status).toBe(201);
  });
});
