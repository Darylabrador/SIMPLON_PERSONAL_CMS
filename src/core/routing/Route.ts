/** 
 * Route
 * 
 * This file is used to define what the created route need as params
 * @module core/routing/Route
 * @author Daryl ABRADOR
 */

import RouteInterface from "../interfaces/RouteInterface";

class Route implements RouteInterface {
  private static instance: Route;
  method: string;
  url: string;
  regexp: any;
  callback: any;

  public constructor(method: string, url: string, callback: any, regexp?: any) {
    this.method   = method;
    this.url      = url;
    this.callback = callback;
    this.regexp   = regexp;
  }
}

export default Route;