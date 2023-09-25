import AddProduct from "../../application/usecase/AddProduct";
import GetProducts from "../../application/usecase/GetProducts";
import HttpServer from "../http/HttpServer";

export default class ProductController {
  constructor(
    readonly httpServer: HttpServer,
    readonly getProducts: GetProducts,
    readonly addProduct: AddProduct,
  ) {
    this.httpServer.on("get", "/products", async (_body: any, query: any) => {
      const products = await getProducts.execute(query);
      return {
        statusCode: 200,
        body: products,
      };
    });

    this.httpServer.on("post", "/products", async (body: any) => {
      await addProduct.execute(body);
      return {
        statusCode: 201,
      };
    });
  }
}
