import ConfigServer from "./services/ConfigServer";
import routerhandler from "./routers/defaultRouter";
const server = new ConfigServer(3000);
server.init(routerhandler)