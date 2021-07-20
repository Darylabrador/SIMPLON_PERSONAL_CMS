import * as fs      from "fs";
import * as path    from "path";
import RouteInterface from "../interfaces/RouteInterface";

class Route implements RouteInterface {
  private static instance: Route;
  method: string;
  url: string;
  callback: any;

  public constructor(method: string, url: string, callback: any) {
    this.method   = method;
    this.url      = url;
    this.callback = callback;
  }
}

export default Route;