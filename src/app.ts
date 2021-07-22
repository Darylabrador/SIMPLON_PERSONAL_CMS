import Server from "./core/server/Server";
import Routes from "./app/routers/Routes";

Routes.build();
Server.start();