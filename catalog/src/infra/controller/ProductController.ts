import AddProduct from "../../application/usecase/AddProduct";
import GetProduct from "../../application/usecase/GetProduct";
import GetProducts from "../../application/usecase/GetProducts";
import HttpServer from "../http/HttpServer";

export default class ProductController {
  constructor(
    readonly httpServer: HttpServer,
    readonly getProducts: GetProducts,
    readonly getProduct: GetProduct,
    readonly addProduct: AddProduct,
  ) {
    this.httpServer.on("get", "/products", async (_body: any, query: any) => {
      const products = await getProducts.execute(query);
      return {
        statusCode: 200,
        body: products,
      };
    });

    this.httpServer.on(
      "get",
      "/products/:productId",
      async (_body: any, _query: any, params: any) => {
        const product = await getProduct.execute(parseInt(params.productId));
        return {
          statusCode: 200,
          body: product,
        };
      },
    );

    this.httpServer.on("post", "/products", async (body: any) => {
      await addProduct.execute(body);
      return {
        statusCode: 201,
      };
    });
  }
}
