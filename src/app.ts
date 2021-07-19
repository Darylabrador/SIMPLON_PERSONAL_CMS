import ConfigServer from "./core/server/ConfigServer";
import routerhandler from "./routers/Router";
const server = new ConfigServer(3000);
server.init(routerhandler)