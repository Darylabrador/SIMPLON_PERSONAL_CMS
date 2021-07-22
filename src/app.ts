/** 
 * Starting point of the app
 */

import Server from "./core/server/Server";
import Routes from "./app/routers/Routes";
import Api from "./app/routers/Api";

Routes.build();
Api.build();
Server.start();