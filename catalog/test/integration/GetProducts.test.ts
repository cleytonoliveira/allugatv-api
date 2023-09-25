import request from "supertest";
import ExpressAdapter from "../../src/infra/http/ExpressAdapter";
import ProductController from "../../src/infra/controller/ProductController";
import GetProducts from "../../src/application/usecase/GetProducts";
import AddProduct from "../../src/application/usecase/AddProduct";
import ProductRepositoryMemory from "../../src/infra/repository/ProductRepositoryMemory";

describe("GET /products", () => {
  const httpServer = new ExpressAdapter();
  const productRepository = new ProductRepositoryMemory();
  const getProduct = new GetProducts(productRepository);
  const addProduct = new AddProduct(productRepository);
  new ProductController(httpServer, getProduct, addProduct);
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

  it("should return a list of subscription products", async () => {
    const response = await request(app).get("/products");

    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(3);
    expect(response.body).toEqual(newProducts);
  });
});
