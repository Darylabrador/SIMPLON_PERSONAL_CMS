import { createServer } from 'http';
import routerhandler from "./routers/defaultRouter";

const port = 3000;

const server = createServer(routerhandler);

server.listen(port);