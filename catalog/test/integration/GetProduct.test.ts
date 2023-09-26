import request from "supertest";
import AddProduct from "../../src/application/usecase/AddProduct";
import GetProduct from "../../src/application/usecase/GetProduct";
import GetProducts from "../../src/application/usecase/GetProducts";
import ProductController from "../../src/infra/controller/ProductController";
import ExpressAdapter from "../../src/infra/http/ExpressAdapter";
import ProductRepositoryMemory from "../../src/infra/repository/ProductRepositoryMemory";

describe("GET /products/:productId", () => {
  const httpServer = new ExpressAdapter();
  const productRepository = new ProductRepositoryMemory();
  const getProducts = new GetProducts(productRepository);
  const addProduct = new AddProduct(productRepository);
  const getProduct = new GetProduct(productRepository);

  new ProductController(httpServer, getProducts, getProduct, addProduct);
  const app = httpServer.app;

  const newProducts = [
    {
      name: "Basic TV",
      image: "https://via.placeholder.com/150",
      price: 1499.99,
      description: "Basic subscription",
    },
    {
      name: "Premium TV",
      image: "https://via.placeholder.com/150",
      price: 2399.89,
      description: "Premium subscription",
    },
    {
      name: "Ultimate TV",
      image: "https://via.placeholder.com/150",
      price: 3499.99,
      description: "Ultimate subscription",
    },
  ];

  beforeAll(async () => {
    newProducts.forEach(async (product) => {
      await request(app).post("/products").send(product);
    });
  });

  it("should return a subscription product", async () => {
    const response = await request(app).get("/products/1");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ productId: 1, ...newProducts[0] });
  });
});
