export default interface HttpServer {
  on(method: string, endpoint: string, handler: Function): void;
  listen(port: number): void;
}
