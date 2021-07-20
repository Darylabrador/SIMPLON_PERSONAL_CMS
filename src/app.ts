import ConfigServer from "./core/server/ConfigServer";
import Routes from "./routers/Routes";

Routes.build();
ConfigServer.start();